var express = require('express');
var passport = require('passport');
var models = require('../models/schema');
var metaData = require('../models/meta');
var User = models.User;
var Booking = models.Booking;
var router = express.Router();

/* GET bookings for logged in User */
router.get('/', function(req, res, next) {
	if (req.user) {

		User.find({
			'_id': req.user
		}, function(err, user) {
			if (err) {
				return next(err);
			}

			var whereC = "";
			switch (user.usertype) {
				case metaData.USER_TYPE.CUSTOMER:
					whereC = 'customer';
					break;
				case metaData.USER_TYPE.TRANSLATOR:
					whereC = 'translator';
					break;
			}

			Booking.find({
				whereC: req.user,
				status: {
					$in: [metaData.BOOKING_STATUS.REQUESTED, metaData.BOOKING_STATUS.ACCEPTED]
				}
			}, function(err, bookings) {
				if (err) {
					return next(err);
				}
				res.json(bookings);
			});

			/*
			Booking.paginate({
				whereC: req.user,
				status: {
					$in: [metaData.BOOKING_STATUS.REQUESTED, metaData.BOOKING_STATUS.ACCEPTED]
				}
			}, {
				page: req.query.page,
				limit: req.query.limit,
			}, function(err, bookings) {
				if (err) {
					return next(err);
				}
				res.json(bookings);
			}); */
		});
	} else {
		res.json("unauthorize access");
	}
});

/* Post add  or create booking for logged in User */
router.post('/', function(req, res, next) {
	if (req.user) {

		User.find({
			'_id': req.user
		}, function(err, user) {
			if (err) {
				return next(err);
			}

			try{
			var booking = new Booking({
				customer: user._id,
				from_lang: req.body.fromlang,
				to_lang: req.body.tolang,
				//booking_time: req.body.bookingyime,
				booking_time: new Date,
				booking_time_offset: req.body.bookingoffset,
				operation_type: req.body.operationtype,
				duration_type: req.body.durationtype,
				status: metaData.BOOKING_STATUS.REQUESTED,
				translator: user._id
			});

			booking.save(function(err, result) {
				if (err) {
					return next(err);
				}

				res.json('successfully saved');

			});
			}catch(err){
				console.log(err);
				res.json('error');
			}
		});
	} else {
		res.json("unauthorize access");
	}
});

module.exports = router;