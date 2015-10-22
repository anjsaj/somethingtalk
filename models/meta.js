var USER_TYPE = {
	CUSTOMER: "CUSTOMER",
	SUPPLIER: "SUPPLIER",
	TRANSLATOR: "TRANSLATOR",
	values: function() {
		return ["CUSTOMER", "SUPPLIER", "TRANSLATOR"];
	}
};

var OPERATION_TYPE = {
	HEALTHCARE: "HEALTHCARE",
	OTHER: "OTHER",
	values: function() {
		return ["HEALTHCARE", "OTHER"];
	}
};

var DURATION_TYPE = {
	ONEHOUR: "ONEHOUR",
	MORETHANONEHOUR: "MORETHANONEHOUR",
	URGENT: "URGENT", //within 20 mins
	values: function() {
		return ["ONEHOUR", "MORETHANONEHOUR", "URGENT"];
	}
};

var BOOKING_STATUS = {
	REQUESTED: "REQUESTED",
	ACCEPTED: "ACCEPTED", 
	CANCELLED: "CANCELLED", //booking cancelled my customer
	CANCELLED_ACCEPTANCE: "CANCELLED_ACCEPTANCE", //confirmation cancelled by translator
	DONE: "DONE", //Meeting done by customer or translator
	values: function() {
		return ["REQUESTED", "ACCEPTED", "CANCELLED", "DONE", "CANCELLED_ACCEPTANCE"];
	}
};

exports.USER_TYPE = USER_TYPE;
exports.OPERATION_TYPE = OPERATION_TYPE;
exports.DURATION_TYPE = DURATION_TYPE;
exports.BOOKING_STATUS = BOOKING_STATUS;