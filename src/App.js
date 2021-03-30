import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Project/Project";
// import About from "./components/About/About";
// import Footer from "./components/Footer/Footer";
import classes from "./App.css";
import video from "./videos/pied-piper-video.mp4";

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
						<Navbar />
						<Switch>
							{/* <Project /> */}
							{/* <Route exact path="/about" component={About} /> */}
						</Switch>
					</div>
				</div>

				{/* <Footer /> */}
			</Router>
		);
	}
}
export default App;
