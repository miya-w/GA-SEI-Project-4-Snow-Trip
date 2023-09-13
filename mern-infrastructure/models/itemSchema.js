const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  state: String,
  picture: String,
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  lift: { type: Number, required: true },
  website: { type: String, required: true },
  image: String,
  slope: Number,
  elevation: String,
  description: String,
  trail:String,

}, {
  timestamps: true
});

module.exports = itemSchema;