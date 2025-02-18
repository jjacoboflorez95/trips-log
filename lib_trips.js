"use strict";

class Trip {
	constructor(destination, km, litres) {
		this.destination = destination;
		this.km = parseFloat(km);
		this.litres = parseFloat(litres);
	}

	/**
	 * Read-only property that validates is the user's entries are correct.
	 */
	get isValid() {
		// a read-only property
		if (this.destination == "" || isNaN(this.km) || isNaN(this.litres)) {
			return false;
		} else if (this.km <= 0 || this.litres <= 0) {
			return false;
		} else {
			return true;
		}
	}
	/**
	 * Read-only property that return the kml calculated.
	 */
	get kml() {
		// a read-only property
		return this.km / this.litres;
	}
	/**
	 * Method that create a string and the returns it.
	 * @returns
	 */
	toString() {
		const kml = this.kml.toFixed(1);
		return `${this.destination}: Kilometers - ${this.km}; KML - ${kml}`;
	}
}

const trips = (() => {
	// private variables and constants
	const tripsArray = [];

	// public methods
	return {
		/**
		 * Method that push a new trip only if the parameter received is an instance of Trip class.
		 * @param {*} trip Trip object.
		 * @returns
		 */
		push(trip) {
			// only allow Trip objects to be added to array
			if (trip instanceof Trip) {
				tripsArray.push(trip);
			}
			return this;
		},
		/**
		 * Method that calculates the total Kml.
		 * @returns
		 */
		totalKml() {
			// a read-only property
			let totalKm = 0;
			let totalLitres = 0;
			for (let trip of tripsArray) {
				totalKm += trip.km;
				totalLitres += trip.litres;
			}
			return totalKm / totalLitres;
		},
		/**
		 * Method that create a string and the returns it.
		 * @returns
		 */
		toString() {
			let str = "";
			for (let trip of tripsArray) {
				str += trip.toString() + "\n";
			}
			str += "\nCumulative KML: " + this.totalKml().toFixed(1);
			return str;
		},
	};
})();
