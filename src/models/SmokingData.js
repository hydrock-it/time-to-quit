import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const SmokingDataSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  cigarettesInPack: {
    type: Number,
    required: true,
  },
  cigarettesInDay: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  nicotine: {
    type: Number,
    required: true,
  },
  tar: {
    type: Number,
    required: true,
  },
  dateOfTerminated: {
    type: Date,
    default: null,
  },
});

export default model('smokingData', SmokingDataSchema);
