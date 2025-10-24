// server/config/passport.js
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import mongoose from 'mongoose';
import User from '../models/user.model.js'; 
export default function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${process.env.BACKEND_URL}/api/auth/google/callback`, 
      },
      async (accessToken, refreshToken, profile, done) => {
        // verify callback, using modern async/await
        const newUser = {
          googleId: profile.id,
          name: profile.displayName, 
          email: profile.emails[0].value,
        };
        try {
          let user = await User.findOne({ googleId: profile.id });
          if (user) {
            return done(null, user);
          } else {
            user = await User.create(newUser);
            return done(null, user);
          }
        } catch (err) {
          console.error(err);
          return done(err, null);
        }
      }
    )
  );
  // Serialize user into the session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  // Deserialize user from the session
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user); 
    } catch (err) {
      done(err, null);
    }
  });
}