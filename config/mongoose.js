const mongoose = require("mongoose");
// 
// const connectDB = async (url)=>{
//     return mongoose.connect(url)
// }
const connectDB = async (url) => {
    try {
      await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to the database');
    } catch (error) {
      console.error('Error connecting to the database:', error);
      // Handle the error appropriately
    }
  };



module.exports = connectDB;