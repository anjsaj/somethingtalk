var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var USER_TYPE = ["CUSTOMER", "SUPPLIER", "TRANSLATOR"];
var OPERATION_TYPE = ["CUSTOMER", "SUPPLIER", "TRANSLATOR"];
var DURATION_TYPE = ["One hour", "More than one Hour", "Other"];
var BOOKING_STATUS = ["REQUESTED", "ACCEPTED", "CANCELLED", "DONE"];

var Language = new Schema({
	lang: String,
	active: Boolean,
});

var User = new Schema({
	username: String,
	password: String,
	email: String,
	phone: String,
	usertype: {
		type: String,
		enum: USER_TYPE
	},
	languages: [String]
});

var Booking = new Schema({
		customer: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		},
		from_lang: String,
		to_lang: String,
		booking_time: Date,
		booking_time_offset: String,
		operation_type: {
			type: String
			enum: OPERATION_TYPE
		},
		duration_type: {
			type: String
			enum: DURATION_TYPE
		},
		status: {
			type: String
			enum: BOOKING_STATUS
		},
		translator: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		}
	}, {
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	}

);

//authentication plugin
User.plugin(passportLocalMongoose);

exports.User = mongoose.model('users', User);
exports.Language = mongoose.model("languages", Language);
exports.Booking = mongoose.model("bookings", Booking);
exports.USER_TYPE = USER_TYPE;