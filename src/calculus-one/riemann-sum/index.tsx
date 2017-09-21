import * as React from 'react';
import { Context, Node } from 'react-mathjax';
import Question from '../../question';
import Given from '../../given';
import Anwser from '../../anwser';

export default (props) =>
	<Context>
		<div>
			<Question>
				Find a closed form expression for the n<sup>th</sup> right Riemann sum of this integral
			</Question>

			<Given>{'\\int_2^{19} (10x - 9)\\mathrm{d}x'}</Given>

			<Anwser>
					{`\\begin{align}
						R_n &= \\sum_{i=1}^n \\bigg[ 10 \\cdot (2 + \\frac{19 - 2}{n} \\cdot i) - 9 \\bigg] \\cdot \\frac{19 - 2}{n} \\\\
						&= \\sum_{i=1}^n \\bigg[ 10 \\cdot (2 + \\frac{17}{n} \\cdot i) - 9 \\bigg] \\cdot \\frac{17}{n} \\\\
						&=  \\frac{17}{n} \\cdot \\sum_{i=1}^n \\bigg[ 10 \\cdot (2 + \\frac{17}{n} \\cdot i) - 9 \\bigg] \\\\
						&=  \\frac{17}{n} \\cdot \\sum_{i=1}^n \\bigg[ (20 + \\frac{170}{n} \\cdot i) - 9 \\bigg] \\\\
						&=  \\frac{17}{n} \\cdot \\sum_{i=1}^n \\bigg[ 11 + \\frac{170}{n} \\cdot i \\bigg] \\\\
						&=  \\frac{17}{n} \\bigg[ \\sum_{i=1}^n 11 + \\sum_{i=1}^n \\bigg( \\frac{170}{n} \\cdot i \\bigg) \\bigg] \\\\
						&=  \\frac{17}{n} \\bigg[ 11 \\cdot \\sum_{i=1}^n 1 + \\frac{170}{n} \\cdot \\sum_{i=1}^n i \\bigg] \\\\
						&=  \\frac{187}{n} \\cdot \\sum_{i=1}^n 1 + \\frac{2890}{n^2} \\cdot \\sum_{i=1}^n i \\\\
						&=  \\frac{187}{n} \\cdot \\sum_{i=1}^n 1 + \\frac{2890}{n^2} \\cdot \\sum_{i=1}^n i \\\\
						&=  \\frac{187}{n} \\cdot n + \\frac{2890}{n^2} \\cdot \\frac{n(n + 1)}{2} \\\\
						&=  187 + \\frac{2890n(n + 1)}{2n^2} \\\\
						&=  187 + \\frac{1445(n + 1)}{n} \\\\
						&=  187 + 1445 \\cdot (1 + \\frac{1}{n}) \\\\
						&=  1632 + \\frac{1445}{n} \\\\
					\\end{align}`}
			</Anwser>
		</div>
	</Context>