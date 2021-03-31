import React from "react";
import classes from "./Contact.css";

const Contact = () => {
	return (
		<div className={classes.container}>
			<h1>
				<i class="far fa-address-card" />contact me
			</h1>
			<div className={classes.socials}>
				<ul className={classes.items}>
					<li>
						<i class="fab fa-github" />Github
					</li>
					<li>
						<i class="fab fa-instagram" />Instagram
					</li>
					<li>
						<i class="fab fa-facebook" />Facebook
					</li>
					<li>
						<i class="fab fa-twitter" />Twitter
					</li>
					<li>
						<i class="fas fa-envelope" />Gmail
					</li>
					<li>
						<i class="fab fa-linkedin" />LinkedIn
					</li>
				</ul>
			</div>
			<h4>
				<i class="far fa-phone" />phone: +233 558 159 629
			</h4>
		</div>
	);
};

export default Contact;
