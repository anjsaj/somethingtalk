var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var mongoosePaginate = require('mongoose-paginate');
var metaData = require('./meta');

var Language = new Schema({
	lang: String,
	active: Boolean,
});

//User schema
var User = new Schema({
	username: String,
	password: String,
	email: String,
	phone: String,
	usertype: {
		type: String,
		enum: metaData.USER_TYPE.values()
	},
	languages: [String],
	active: {
		type: Boolean,
		default: true
	}
}, {
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	}
});

//Booking schema
var Booking = new Schema({
		customer: {
			type: Schema.Types.ObjectId,
			ref: 'users'
		},
		from_lang: String,
		to_lang: String,
		booking_time: Date,
		booking_time_offset: String,
		operation_type: {
			type: String,
			enum: metaData.OPERATION_TYPE.values()
		},
		duration_type: {
			type: String,
			enum: metaData.DURATION_TYPE.values()
		},
		status: {
			type: String,
			enum: metaData.BOOKING_STATUS.values()
		},
		translator: {
			type: Schema.Types.ObjectId,
			ref: 'users'
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

//pagination plugin
Booking.plugin(mongoosePaginate);

exports.User = mongoose.model('users', User);
exports.Language = mongoose.model("languages", Language);
exports.Booking = mongoose.model("bookings", Booking);