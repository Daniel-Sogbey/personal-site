import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from "./components/NavBar/Navbar";
// import About from "./components/About/About";
// import Footer from "./components/Footer/Footer";
import "./App.css";

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					{/* <Navbar /> */}
					<Switch>
						{/* <Route exact path="/about" component={About} /> */}
					</Switch>
				</div>
				{/* <Footer /> */}
			</Router>
		);
	}
}

export default App;
