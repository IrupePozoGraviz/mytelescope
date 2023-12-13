import React from 'react';
import Anders from '../images/Anders.png'
import Dator from '../images/dataapparat.png'
import { TrialBtn } from '../components/trialBtn';
import '../css/sectionThree.css';

export const SectionThree = () => {
	return(
<main className="SectionThreeHome-Parent">
	<section className="sectionThreeHome-flex">
	<section className="sectionThreeHome-Anders">
	<div className="sectionThreeHome-Anders-img">
	<img src={Anders} className="sectionThree-enter" alt="Anders from tv4" />
	</div>
	<article className="sectionThreeHome-Anders-text">
		<p>MyTelescope brings several key benefits to our work. The ability to easily track and evaluate campaigns and activities that are challenging to measure using other methods.
</p>
	</article>
	<div className="sectionThreeHome-Anders-name">
	<h3>Anders Eriksson, Head of B2B insights TV-4</h3>
	</div>
	</section>
<section className="sectionThreeHome-child">
<img src={Dator} className="sectionThree-dator" alt="Arrow" />

</section>
</section>
<div className="sectionThreeBtn">
<TrialBtn />
</div>
	 </main>
	)
}