import * as React from 'react';

const sectionStyle: React.CSSProperties = {
	border: '4px solid #888',
	margin: '2em 0 0 0',
};

const h4Style: React.CSSProperties = {
	backgroundColor: '#888',
	color: '#FFF',
	margin: 0,
	padding: '0.5em 1em',
};

const bodyStyle: React.CSSProperties = {
	padding: '1em',
};

const Question = (props) =>
	<section style={{sectionStyle}}>
		<h4 style={{h4Style}}>Question</h4>
		<div style={{bodyStyle}}>{props.children}</div>
	</section>;

export default Question;