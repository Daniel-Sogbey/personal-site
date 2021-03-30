import React from "react";
import classes from "./Project.css";
import PropTypes from "prop-types";

const Project = ({ image, description }) => {
	return (
		<div className={classes.container}>
			<div className={classes.card}>
				<div className={classes.image}>
					<h1>
						{image}
					</h1>
				</div>
				<div className={classes.description}>
					<h1>
						{description}
					</h1>
				</div>
			</div>
		</div>
	);
};

Project.defaultProps = {
	image: "Image Here",
};

Project.propTypes = {
	image: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default Project;
