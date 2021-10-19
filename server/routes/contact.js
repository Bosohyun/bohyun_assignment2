let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let contactController = require('../controllers/contact');


function requireAuth(req,res,next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Book List page - READ OPeration */
router.get('/', contactController.displayContactList);

/* GET Route displaying add page - CREATE operation */

router.get('/add', requireAuth, contactController.displayAddContactPage);

/*Post route for processing the add page = Create operation*/
router.post('/add', requireAuth, contactController.processAddContactPage);


/* GET Route displaying the Edit page - Update operation */
router.get('/edit/:id',requireAuth, contactController.displayEditContactPage);

/* POST route for processing the Edit page = Update operation*/
router.post('/edit/:id', requireAuth, contactController.processEditContactPage);

/* GET to perform deletion -DELETE operation */
router.get('/delete/:id', requireAuth, contactController.performContactDelete);

module.exports = router;