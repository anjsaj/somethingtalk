var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
	username: String,
	password: String,
	email: String,
	phone: String,
	usertype: {
		type: String,
		validate: function(val) {
			return (val == 'CUSTOMER') || (val == 'SUPPLIER') || (val == 'TRANSLATOR');
		},
		default: 'CUSTOMER'
	}
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', User);