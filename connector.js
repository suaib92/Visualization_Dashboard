const mongoose = require("mongoose")

function connector() {
  mongoose.connect("mongodb+srv://suaib8211:vUCY1QpNCWklTNEL@cluster0.jwtrzhp.mongodb.net/Visualization_Dashboard?retryWrites=true&W=majority"
  , {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=>{
   console.log("mongoose is live now")
}).catch((err)=>{
console.log({err})
})}

module.exports = connector