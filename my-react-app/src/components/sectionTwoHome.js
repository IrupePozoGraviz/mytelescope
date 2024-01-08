import React from 'react';
import Enter from '../images/enterknapp.svg'
import Arrow from '../images/pil.png'
import '../css/sectionTwo.css';

export const SectionTwo = () => {
	return(
<main className="SectionTwoHome-Parent">
	<div className="sectionTwoHome-title">
		<h1>How it works</h1>
	</div>
<section className="sectionTwoHome-child">
		<article className="sectionTwo-sister">
			<p className="typesSisterP"><span className="type">1</span>Type in whatever you are <span className="qurious">qurious about</span> </p>
			<p className="typeTwoElectric">Are electric cars trending?</p>
		</article>

		<div className="sectionTwoHome-brother">
			<p className="typeTwoP"><span className="type">2</span> Press Enter. That's it.</p>
	
	 <img src={Enter} className="sectionTwo-enter" alt="Enter" />
	 <img src={Arrow} className="sectionTwo-arrow" alt="Arrow" />
		</div>
</section>
	 </main>
	)
}
