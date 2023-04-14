const mongoose = require('mongoose');
const { urlDb } = require('../config');

mongoose.connect(urlDb);

module.exports = db;
