import React from "react";
import classes from "./Navbar.css";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
	const toggleMenu = () => {
		const menu = document.getElementsByClassName(classes.nav);
		if (menu[0].style.display === "block") {
			menu[0].style.display = "none";
		} else {
			menu[0].style.display = "block";
		}
		console.log(menu);
	};

	return (
		<div className={classes.navbar}>
			<i class="fas fa-biking" />
			<h3>
				{title}
			</h3>
			<div className={classes.menu}>
				<i className="fas fa-bars" onClick={toggleMenu} />
			</div>
			<ul className={classes.nav}>
				<li>
					<i class="fas fa-meteor" />
					About
				</li>
			</ul>
		</div>
	);
};

Navbar.defaultProps = {
	title: "DaN SoGbEy",
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Navbar;
