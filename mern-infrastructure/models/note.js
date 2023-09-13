const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  date: {
    type: Date,
    trim: true,
},

  country: {
    type: String, // Change from 'text' to 'String'
    enum: ['Australia', 'Japan'], // Correct placement of 'enum'
  },


 skiresort:{
  type: String,
 },
 text:{
  type: String,
 },
  
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Note', noteSchema);