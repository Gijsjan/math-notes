import * as React from 'react';
import {Link, Route} from 'react-router-dom';
import Home from './home';
import CalculusOne from './calculus-one';

const wrapperStyle: React.CSSProperties = {
	display: 'grid',
	gridTemplateColumns: '100vw',
	gridTemplateRows: '10vh 90vh',
};

export default () => (
	<div style={wrapperStyle}>
		<header>
			<h1><Link to="/">Math notes</Link></h1>
		</header>
		<Route
			component={Home}
			exact
			path="/"
		/>
		<Route
			component={CalculusOne}
			path="/calculus-one"
		/>
	</div>
);
