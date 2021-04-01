import React from "react";
import classes from "./Navbar.css";
import PropTypes from "prop-types";

const Navbar = ({ title, about, icon1, icon2, toggle }) => {
	return (
		<div className={classes.navbar}>
			<i className={icon1} />
			<h3>
				{title}
			</h3>
			<div className={classes.menu}>
				<i className={icon2} onClick={toggle} />
			</div>
			<ul className={classes.nav}>
				<li>
					<i className="fas fa-meteor" />
					{about}
				</li>
			</ul>
		</div>
	);
};

Navbar.defaultProps = {
	title: "DaN SoGbEy",
	about: "",
	icon1: "fas fa-biking",
	icon2: "fas fa-bars",
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	about: PropTypes.string.isRequired,
	icon1: PropTypes.string.isRequired,
	icon2: PropTypes.string.isRequired,
};

export default Navbar;
