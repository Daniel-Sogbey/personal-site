import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Updates from "./components/Updates/Updates";
// import About from "./components/About/About";
// import Footer from "./components/Footer/Footer";
import classes from "./App.css";
import video from "./videos/pied-piper-video.mp4";
import grandpa from "./images/online-grandpa.png";
import payment from "./images/payment-gateway.png";
import shop from "./images/shop.webp";
import streaming from "./images/video-streaming.jpg";
import navClasses from "./components/Navbar/Navbar.css";

class App extends Component {
	// componentDidMount() {
	// if (this.video) {
	// this.video.addEventListener("loadeddata", () => {});
	// }
	// }

	// componentWillUnmount() {
	// if (this.video) {
	// this.video.removeEventListener("loadeddata", () => {});
	// }
	// }
	//

	toggleMenu = () => {
		const menu = document.getElementsByClassName(navClasses.nav);
		if (menu[0].style.display === "block") {
			menu[0].style.display = "none";
		} else {
			menu[0].style.display = "block";
		}
		console.log(menu);
	};

	render() {
		// const src = "./videos/pied-piper-video.mp4";
		return (
			<Router>
				<div className={classes.content}>
					<div className={classes.video}>
						<video autoPlay loop muted playsInline>
							<source src={video} type="video/mp4" />
						</video>
					</div>
					<div>
						<Navbar about="About" toggle={this.toggleMenu} />
						<hr className={(classes.dottedLines, classes.lines)} />
						<div className={classes.projects}>
							<Project image={shop} link="/" description="Shop App" />
							<hr className={(classes.dottedLines, classes.lines)} />
							<Project
								image={grandpa}
								link="/"
								description="Online GrandPa App"
							/>
							<hr className={(classes.dottedLines, classes.lines)} />
							<Project
								image={payment}
								link="/"
								description="Payment Gateway App"
							/>
							<hr className={(classes.dottedLines, classes.lines)} />
							<Project
								image={streaming}
								link="/"
								description="Video Streaming App"
							/>
						</div>
						<div className={classes.rightC}>
							<div className={classes.updates}>
								<Updates />
								<hr className={(classes.dottedLines, classes.lines)} />
							</div>
							<div className={classes.contact}>
								<Contact />
							</div>
						</div>

						<Switch>
							{/* <Route exact path="/about" component={About} /> */}
						</Switch>
						<hr className={(classes.dottedLines, classes.lines)} />
						<Navbar
							title="by DaN@2021"
							icon1="fab fa-github"
							icon2="fas fa-meteor"
						/>
					</div>
				</div>

				{/* <Footer /> */}
			</Router>
		);
	}
}
export default App;
