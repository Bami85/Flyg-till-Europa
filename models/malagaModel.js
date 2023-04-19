import { Schema, model, models } from 'mongoose';

const valenciaSchema = new Schema({
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

const Valecia = models.Valecia || model('Valecia', valenciaSchema);

export default Valecia;