var express = require('express');
var passport = require('passport');
var models = require('../models/schema');
var User = models.User;
var Language = models.Language;
var USER_TYPE = models.USER_TYPE;
var Booking = models.Booking;
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 	if(req.user){
 		
 		User.find({'_id':req.user}, function(err, users) {
    		res.json(users);
  		});
 	}
 	else{
 		res.send("un authorize access");	
 	}
});

module.exports = router;
