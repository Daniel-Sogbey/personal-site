import React, { Component } from "react";
import axios from "axios";
import classes from "./Updates.css";
import Spinner from "../Spinner/Spinner";

class Updates extends Component {
	state = {
		repos: [],
		loading: false,
	};

	async componentDidMount() {
		this.setState({ loading: true });
		const response = await axios.get(
			`https://api.github.com/users/daniel-sogbey/repos?per_page=5&sort=created:asc&client_id=${process
				.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env
				.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		console.log(response.data, "data");

		this.setState({
			repos: response.data,
			loading: false,
		});

		console.log(this.state.repos, "repos");
		console.log(response.data[0].language);
	}

	render() {
		const { loading, repos } = this.state;
		if (!loading) {
			return (
				<div className={classes.updates}>
					<div className={classes.inner}>
						{repos.map(repo => {
							return (
								<div className={classes.repos} key={repo.id}>
									<h4>
										{repo.full_name.split("/")[1]}
									</h4>
									<p className={classes.login}>
										Owner:{repo.owner.login}
									</p>
									<p className={classes.published}>Published at:</p>
									<p className={classes.updated}>
										Updated at: {repo.pushed_at}
									</p>
									<p className={classes.language}>
										Language:{repo.language === null
											? "Multiple Languages"
											: repo.language}
									</p>
									<p className={classes.forks}>
										Forks:{repo.forks}
									</p>
									<p className={classes.watches}>
										Watches:{repo.watchers}
									</p>
									<p className={classes.issues}>
										Issues:{repo.open_issues}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			);
		} else {
			return <Spinner />;
		}
	}
}

export default Updates;
