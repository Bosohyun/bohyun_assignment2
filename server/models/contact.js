let mongoose = require("mongoose");



let contactsModel = mongoose.Schema({

   name: String,
   phone: String,
   email: String,
},
{
    collection: "contacts"
});

module.exports = mongoose.model('contact', contactsModel);

