let express = require('express');
let router= express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

let Contact = require('../models/contact');
module.exports.displayContactList = (req, res, next) => {

    Contact.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);


            res.render('contact/list', 
            {title: 'Contact', 
            ContactList: contactList, 
            displayName: req.user ? req.user.displayName :''});            
        }
    }).sort({name:1});
}

module.exports.displayAddContactPage = (req, res, next) => {
    res.render('contact/add', {title: 'Add Contact',displayName: req.user ? req.user.displayName :''})     
}

module.exports.processAddContactPage = (req, res, next) => {
    let newContact = Contact({
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email,
    });

    Contact.create(newContact, (err,Contact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);

        }
        else
        {
            res.redirect('/contact-list');
        }

    });
}

module.exports.displayEditContactPage = (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) =>{

        if(err)
        {
            console.log(err);
            res.end(err);
        }

        else
        {
            //show the eidt view
            res.render('contact/edit', {title: 'Edit Contact', contact: contactToEdit,
            displayName: req.user ? req.user.displayName :''})
        }

    });

}

module.exports.processEditContactPage = (req, res, next) => {
    let id = req.params.id

    let updateContact = Contact({
        "_id": id,
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email,
       
    });

    Contact.updateOne({_id:id}, updateContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/contact-list');
        }

    });

}

module.exports.performContactDelete = (req, res, next) => {
    let id = req.params.id;


    Contact.remove({_id:id}, (err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/contact-list');
        }

    });

}