"use strict";

$(document).ready(() => {
	const tripsModule = trips;
	//const trips = new Trips();

	$("#add_trip").click(() => {
		const trip = new Trip(
			$("#destination").val(),
			$("#km").val(),
			$("#litres").val()
		);

		if (trip.isValid) {
			$("#trip_list").val(tripsModule.push(trip).toString());

			$("#destination").val("");
			$("#km").val("");
			$("#litres").val("");

			$("#destination").focus();
		} else {
			alert(
				"Please complete all fields.\nKilometers and litres " +
					"must be numeric and greater than zero."
			);
			$("#destination").select();
		}
	});

	$("#destination").focus();
});
