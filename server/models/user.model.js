import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true
  },
  // The user's full name provided by Google.
  name: {
    type: String,
    required: true,
  },
  // The user's primary email address provided by Google.
  email: {
    type: String,
    required: true,
    unique: true
  },
  // A URL to the user's profile picture provided by Google.
  image: {
    type: String
  }
}, {
  // Automatically add 'createdAt' and 'updatedAt' fields to the document.
  timestamps: true
});
const User = mongoose.model('User', userSchema);
export default User;
