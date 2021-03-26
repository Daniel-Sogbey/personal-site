import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
	return (
		<Footer className="footer">
			<ul>
				<li>
					<Link to="#">My Github</Link>
				</li>
				<li>
					<Link to="#">My LinkedIn</Link>
				</li>
			</ul>
		</Footer>
	);
};

export default Footer;
