import cors from 'cors'; 
import 'dotenv/config';
import express from 'express';
import { notFound, errorHandler } from './middleware/errorHandler.js';
import session from 'express-session';
import passport from 'passport';
import configurePassport from './config/passport.js';
configurePassport(passport);
import connectDB from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import projectRoutes from './routes/projectRoutes.js';
import taskRoutes from './routes/task.routes.js';
connectDB();
const app = express();
app.use(cors({
  origin: process.env.FRONTEND_URL, // Use the URL Vercel gave you
  credentials: true // Important for sessions/cookies if needed later, good practice
}));
app.use(express.json());
// Session Middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false, 
  saveUninitialized: false 
}));
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session()); 
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/projects',projectRoutes);
app.use('/api/tasks', taskRoutes);
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('API is running...');
});
app.use(notFound);
//error handler
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});