import React from "react";
import classes from "./Project.css";
import PropTypes from "prop-types";

const Project = ({ image, description, link }) => {
	return (
		<div className={classes.container}>
			<div className={classes.card}>
				<div className={classes.image}>
					<img className={classes.images} src={image} alt="img" />
				</div>
				<div className={classes.description}>
					<h4>
						<a href={link}>
							{description}
						</a>
					</h4>
				</div>
			</div>
		</div>
	);
};

Project.defaultProps = {
	image: "Avatar",
};

Project.propTypes = {
	image: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};

export default Project;
