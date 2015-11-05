var mongoose = require('mongoose');

// Create UserSchema
var UserSchema = mongoose.Schema({
   name: String,
   password: String,
   admin: Boolean,
   date: { type: Date, default: Date.now }
});

// Export the model
module.exports = mongoose.model('User', UserSchema);


