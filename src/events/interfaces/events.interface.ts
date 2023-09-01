/* eslint-disable prettier/prettier */
import { Document } from "mongoose";

export interface Events extends Document {
  //readonly id: string;
  readonly name: string;
  readonly description: String,
  readonly date: String,
  readonly images: String,
  readonly owner:String,
  readonly address:Number,
  readonly cost:Number,
}
