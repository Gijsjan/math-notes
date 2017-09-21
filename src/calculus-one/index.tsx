import * as React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import RiemannSum from './riemann-sum';
import Integral from './integral';
import Antiderivative from './antiderivative';

export default (props) =>
	<div>
		<h2>Calculus One</h2>
		<div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) 9fr' }}>
			<div>
				<Link to="/calculus-one/antiderivative">Antiderivative</Link><br />
				<Link to="/calculus-one/riemann-sum">Riemann sum</Link><br />
				<Link to="/calculus-one/integral">Integral</Link><br />
			</div>
			<Switch>
				<Route
					component={RiemannSum}
					path="/calculus-one/riemann-sum"
				/>
				<Route
					component={Integral}
					path="/calculus-one/integral"
				/>
				<Route
					component={Antiderivative}
					path="/calculus-one/antiderivative"
				/>
			</Switch>
		</div>
	</div>;

