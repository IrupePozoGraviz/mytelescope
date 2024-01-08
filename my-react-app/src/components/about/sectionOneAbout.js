import React from 'react';
import { TrialBtn } from '../trialBtn';
import Galileo from '../../images/Gallileo.svg';


export const SectionOneAbout = () => (
	<main className="about-parent">
		<h1 className="about-hOne">Galileo was a rebel</h1>
		<p>We don't remember Galileo because he invented the telescope.
We remember him because he used raw data to give us a new perspective on reality.</p>
<img src={Galileo} className="about-galileo" alt="Galileo" />

		<TrialBtn />
		</main>
)