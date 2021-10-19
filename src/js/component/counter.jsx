//import react into the bundle
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const SecondsCounter = props => {
	// Hooks
	const [count, setCount] = useState(0);
	const [timeOn, setTimeOn] = useState(true);

	useEffect(() => {
		let interval = null;

		if (count > 999999) setCount(0);

		if (timeOn) {
			interval = setInterval(() => {
				setCount(prevCount => prevCount + 1);
			}, 1000);
		} else {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [timeOn]);

	let arrayNum = count
		.toString()
		.split("")
		.map(Number)
		.reverse();

	return (
		<div className="container-xl counter-div">
			<div className="row py-2 justify-content-center">
				<div
					className="col px-4"
					style={{ color: "rgb(124, 240, 255)" }}>
					<i className="fas fa-clock"></i>
				</div>
				<div className="col px-4">{arrayNum[5] ? arrayNum[5] : 0}</div>
				<div className="col px-4">{arrayNum[4] ? arrayNum[4] : 0}</div>
				<div className="col px-4">{arrayNum[3] ? arrayNum[3] : 0}</div>
				<div className="col px-4">{arrayNum[2] ? arrayNum[2] : 0}</div>
				<div className="col px-4">{arrayNum[1] ? arrayNum[1] : 0}</div>
				<div className="col px-4">{arrayNum[0]}</div>
			</div>
			<div className="button--wrapper">
				<button onClick={() => setTimeOn(true)}>Start</button>
				<button onClick={() => setTimeOn(false)}>Stop</button>
				<button onClick={() => setTimeOn(true)}>Resume</button>
			</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	seconds: PropTypes.number
};

export default SecondsCounter;
