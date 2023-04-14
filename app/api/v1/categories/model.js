const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const categorySchema = Schema(
  {
    name: {
      type: String,
      minlength: [3, 'Length of name must equals more than 3 characters'],
      maxLength: [20, 'Length of name cant more than 20 characters'],
      required: [true, 'name Must be filled'],
    },
  },
  { timestamps: true }
);

module.exports = model('Category', categorySchema);
