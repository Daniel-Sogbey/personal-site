import React from "react";
import classes from "./Contact.css";

const Contact = () => {
	return (
		<div className={classes.container}>
			<h1>
				<i className="far fa-address-card" />contact me
			</h1>
			<div className={classes.socials}>
				<ul className={classes.items}>
					<li>
						<i className="fab fa-github" />{" "}
						<a href="https://github.com/Daniel-Sogbey">Github</a>
					</li>
					<li>
						<i className="fab fa-instagram" />{" "}
						<a href="https://www.instagram.com/dan_sogbey/">Instagram</a>
					</li>
					<li>
						<i className="fab fa-facebook" />{" "}
						<a href="https://www.facebook.com/daniel.sogbey.52/">Facebook</a>
					</li>
					<li>
						<i className="fab fa-twitter" />{" "}
						<a href="https://twitter.com/NVNG_daniel">Twitter</a>
					</li>
					{/* <li> */}
					{/* <i className="fas fa-envelope" />	<a href="https://www.linkedin.com/in/daniel-sogbey-130759184/"> */}
					{/* Gmail */}
					{/* </a> */}
					{/* </li> */}
					<li>
						<i className="fab fa-linkedin" />
						<a href="https://www.linkedin.com/in/daniel-sogbey-130759184/">
							LinkedIn
						</a>
					</li>
				</ul>
			</div>
			<h4>
				<i className="far fa-phone" />phone: +233 558 159 629
			</h4>
		</div>
	);
};

export default Contact;
