import React from "react";
import classes from "./Project.css";

const Project = () => {
	return (
		<div className={classes.card}>
			<div>
				<h1>Image</h1>
			</div>
			<div className={classes.description}>
				<h1>Text</h1>
			</div>
		</div>
	);
};

export default Project;
