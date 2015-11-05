var mongoose = require('mongoose');

// Create the MovieSchema.
var TutorialSchema = new mongoose.Schema({
   title: { type: String, required: true },
   language: { type: String, required: true },
   url: {  type: String, required: true },
   user: { type: String },
   votes: { type: Number },
   date: { type: Date, default: Date.now }
});

// Export the model.
module.exports = mongoose.model('tutorials', TutorialSchema);
