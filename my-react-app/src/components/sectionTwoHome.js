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
			<p>Type in whatever you are qurious about</p>
			<p>Are electric cars trending?</p>
		</article>

		<div className="sectionTwoHome-brother">
			<p>Press Enter. That's it.</p>
			<p>See the trend line</p>
	 <img src={Enter} className="sectionTwo-enter" alt="Enter" />
	 <img src={Arrow} className="sectionTwo-arrow" alt="Arrow" />
		</div>
</section>
	 </main>
	)
}
