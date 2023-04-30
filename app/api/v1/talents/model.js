const mongoose = require('mongoose');

const { model, Schema } = mongoose;

const talentSchema = Schema({
  name: {
    type: String,
    required: [true, 'Name must be filled'],
  },
  role: {
    type: String,
    default: '-',
  },
  image: {
    type: mongoose.Types.ObjectId,
    ref: 'Image',
    required: true,
  },
});

module.exports = model('Talent', talentSchema);
