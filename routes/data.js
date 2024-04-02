const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Visualization_Dashboard = require('../models/dataModel');

router.get('/', async (req, res) => {
  try {
    // Destructure query parameters
    const { end_Year, topics, sector, region, pest, source, swot, country, city } = req.query;
    
    // Construct filter object based on request parameters
    const filters = {};
    
    if (!endYear) {
      return res.status(400).json({ error: 'endYear parameter is required' });
    }

    // Convert endYear to integer
    const endYearInt = parseInt(endYear);

    // Check if endYear is a valid number
    if (isNaN(endYearInt)) {
      return res.status(400).json({ error: 'Invalid endYear value. Must be a number' });
    }
    
    if (topics) {
      filters.topics = topics;
    }

    if (sector) {
      filters.sector = sector;
    }

    if (region) {
      filters.region = region;
    }

    if (pest) {
      filters.pest = pest;
    }

    if (source) {
      filters.source = source;
    }

    if (swot) {
      filters.swot = swot;
    }

    if (country) {
      filters.country = country;
    }

    if (city) {
      filters.city = city;
    }

    // Add other controls or filters as needed...

    // Retrieve data from MongoDB based on filters
    const data = await mongoose.connection.db.collection('Visualization_Dashboard').find(filters).toArray();

    // Send the data as a response
    res.json(data);
    console.log(data);
  } catch (error) {
    console.error('Error fetching data from MongoDB', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
