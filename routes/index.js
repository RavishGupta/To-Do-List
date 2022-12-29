const express = require('express');
// included the router 
const router = express.Router();
// setup the home controller
const homeController = require('../controllers/home_controller');

// added all the routes to the resp files
router.get('/', homeController.home);
router.post('/add-task', homeController.addTask);
router.post('/delete-task', homeController.deleteTask);
// exported the route
module.exports=router;
