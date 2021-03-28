import React from "react";
import classes from "./Navbar.css";

const Navbar = () => {
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
			<h3>DaN SoGbEy</h3>
			<div className={classes.menu}>
				<i className="fas fa-bars" onClick={toggleMenu} />
			</div>
			<ul className={classes.nav}>
				<li>
					<i class="fas fa-meteor" />
					About
				</li>

				<li>
					<i class="fas fa-file" />Resume
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
