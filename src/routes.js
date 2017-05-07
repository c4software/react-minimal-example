import React from 'react';
import {
  HashRouter as Router,
  Route,
	Link
} from 'react-router-dom'

import './index.css';
import Home from './views/home';
import List from './views/list';

// Route de l’application
const routes = (
	<Router>
		<div>
				<div className="text-center pad10">
					<Link to="/">Home</Link> | <Link to="/list">List</Link>
				</div>
				<Route exact path="/" component={Home} />
				<Route path="/list" component={List} />
		</div>
	</Router>
);

export default routes;
