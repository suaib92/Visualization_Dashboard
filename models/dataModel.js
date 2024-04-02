// models/data.model.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
  intensity: Number,
  likelihood: Number,
  relevance: Number,
  year: Number,
  country: String,
  topics: [String],
  region: String,
  city: String
});

const Visualization_Dashboard = mongoose.model('Visualization_Dashboard', dataSchema);

module.exports = Visualization_Dashboard;
