import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  smokingData: {
    type: Object,
    default: {
      dateOfTerminated: new Date('1970-01-01').toJSON(),
      cigarettesInPack: 20,
      cigarettesInDay: 0,
      price: 0,
      nicotine: 0,
      tar: 0,
    },
  },
  isNewUser: {
    type: Boolean,
    default: true,
  },
});

export default model('users', UserSchema);
