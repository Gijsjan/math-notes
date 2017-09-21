import * as React from 'react';
import { Node } from 'react-mathjax'

const sectionStyle: React.CSSProperties = {
	border: '2px solid #888',
	margin: '1em 0 0 1em',
	padding: '1em',
};

const h4Style: React.CSSProperties = {
	color: '#444',
};

const bodyStyle: React.CSSProperties = {
	padding: '1em',
};

const Answer = (props) =>
	<section style={{sectionStyle}}>
		<h4 style={{h4Style}}>Anwser</h4>
		<div style={{bodyStyle}}><Node>{props.children}</Node></div>
	</section>;

export default Answer;