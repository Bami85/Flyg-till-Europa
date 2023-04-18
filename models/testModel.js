import { Schema, model, models } from 'mongoose';

const testSchema = new Schema({
  name: String,
  flyg:Number,
  departure:String,
  destination:String,
  avgångstid:Number,
  hemresa:String,
  antalPlatser: Number,
  bokade:Number,
  avbokningsDatum:Number,
  price:Number,
  url: String,
});

const Test = models.Test || model('Test', testSchema);

export default Test;