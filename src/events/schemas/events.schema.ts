/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';

export const EventSchema = new Schema({
  name: {type: String, required:true},
  description: String,
  date: String,
  images: String,
  owner:String,
  address:Number,
  cost:Number,
});
