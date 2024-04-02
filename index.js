// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dataRouter = require('./routes/data');

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb+srv://suaib8211:vUCY1QpNCWklTNEL@cluster0.jwtrzhp.mongodb.net/Visualization_Dashboard?retryWrites=true&W=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log('MongoDB database connection established successfully');
// });

// app.use('/data', dataRouter);

// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });



const express = require("express");
const connector = require("./connector");
const cors = require('cors');
const dataRouter = require('./routes/data');

const app = express();
connector();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
   res.send("App is live now");
});

// Importing route files


// Using the route files
app.use('/data', dataRouter);


app.listen(5000, () => {
    console.log("listening on port 5000");
});
