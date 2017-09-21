import * as React from 'react';
import { Node } from 'react-mathjax';

const sectionStyle: React.CSSProperties = {
	border: '3px solid #CCC',
	margin: '1em 0 0 1em',
	paddingLeft: '1em',
};

const h4Style = {
	backgroundColor: '#888',
	color: '#FFF',
	margin: 0,
	padding: '0.5em 1em',
};

const bodyStyle: React.CSSProperties = {
	padding: '1em',
};

const Given = (props) =>
	<section style={{sectionStyle}}>
		<h4 style={{h4Style}}>Given</h4>
		<div style={{bodyStyle}}>
			<Node>{props.children}</Node>
		</div>
	</section>;

export default Given;