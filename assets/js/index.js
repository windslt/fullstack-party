import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { store, history} from './store';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

ReactDOM.render((
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Switch>
				<Route path="/" component={App} />
			</Switch>
		</ConnectedRouter>
	</Provider>

), document.getElementById('root'));

registerServiceWorker();
