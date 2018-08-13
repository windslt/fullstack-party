import React, { Component } from 'react';
import Login from "./login/Login";
import { Route, Switch } from 'react-router-dom';
import Issues from "./Issues/Issues";
import './App.scss';

class App extends Component {
  render() {
    return (
	    <div>
		    <Switch>
			    <Route exact path="/" component={Login}/>
			    <Route exact path="/issues/" component={Issues}/>
		    </Switch>
	    </div>
    );
  }
}

export default App;
