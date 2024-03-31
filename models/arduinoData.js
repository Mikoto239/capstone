const mongoose = require('mongoose');

const arduinoDataSchema = new mongoose.Schema({
  vibrationDuration: Number,
  latitude: Number,
  longitude: Number,
  uniqueId: String,,
  createdAt: {
    type: Date,
    default: Date.now
  }
});


const ArduinoData = mongoose.model('ArduinoData', arduinoDataSchema);

module.exports = ArduinoData;

