import React, { Component } from 'react';
import './Login.scss';

const GITHUB_CONNECTION_URL = '/connect/github';

class Login extends Component {
	render() {
		return (
			<div className="Login">
				<div className="container">
					<div className="logo"/>
					<a className="button" href={GITHUB_CONNECTION_URL}>
						Login With GitHub
					</a>
				</div>
			</div>
		);
	}
}

export default Login;
