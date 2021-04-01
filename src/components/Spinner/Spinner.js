import React, { Fragment } from "react";
import spinner from "./spinner.gif";
import classes from "./Spinner.css";

const Spinner = () => {
	return (
		<Fragment>
			<div className={classes.spinner}>
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
			</div>
		</Fragment>
	);
};

export default Spinner;
