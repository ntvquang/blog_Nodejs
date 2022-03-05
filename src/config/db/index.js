const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect("mongodb://localhost:27017/f8_education_dev");
        console.log("Connection Successfully.....");
    } catch (error) {
        console.log("Connection failure!!!");
    }
}

module.exports = { connect };
