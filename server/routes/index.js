let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About page. */
router.get('/about', indexController.displayAboutPage);

/* GET Products page. */
router.get('/projects', indexController.displayProjectPage);

/* GET About Us page. */
router.get('/services', indexController.displayServicePage);


/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/*Post route for processing the login page*/
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/*Post route for processing the Register page*/
router.post('/register', indexController.processRegisterPage);

/* GET to perform UserLogout*/
router.get('/logout', indexController.performLogout);

module.exports = router;
