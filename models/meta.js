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
	values: function() {
		return ["ONEHOUR", "MORETHANONEHOUR"];
	}
};

var BOOKING_STATUS = {
	REQUESTED: "REQUESTED",
	ACCEPTED: "ACCEPTED",
	CANCELLED: "CANCELLED",
	DONE: "DONE",
	values: function() {
		return ["REQUESTED", "ACCEPTED", "CANCELLED", "DONE"];
	}
};

exports.USER_TYPE = USER_TYPE;
exports.OPERATION_TYPE = OPERATION_TYPE;
exports.DURATION_TYPE = DURATION_TYPE;
exports.BOOKING_STATUS = BOOKING_STATUS;