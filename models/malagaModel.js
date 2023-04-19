import { Schema, model, models } from 'mongoose';

const valenciaSchema = new Schema({
  name: String,
  imgAlt:String,
  deal:String,
  price:Number,
  url: String,
  img:
  {
      data: Buffer,
      contentType: String
  }
});

const Valecia = models.Valecia || model('Valecia', valenciaSchema);

export default Valecia;