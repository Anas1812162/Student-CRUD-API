const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let Student_Schema = new Schema({
    Name: {type: String, required: true, max: 100},
    Reg_ID: {type: String, required: true, max: 100},
    Course: {type: String, required: true, max: 100},
    Gender: {type: String, required: true, max: 100},
    City: {type: String, required: true, max: 100}
    
});

module.exports = mongoose.model('Student', Student_Schema);

