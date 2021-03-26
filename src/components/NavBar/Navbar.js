import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">DaN SogBeY</Link>
				</li>
				<li className="about-me active" style={{ float: "right" }}>
					<Link to="/about">About Me</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
