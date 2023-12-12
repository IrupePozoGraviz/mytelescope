import React from 'react';
import { SectionOne } from '../components/sectionOneHome';
import { SectionTwo } from '../components/sectionTwoHome';
import { Blog } from '../pages/blog'
import { SectionThree } from '../components/sectionThreeHome';
import '../css/homes.css';


export const Home = () => (
	<div className="Homes">
		<SectionOne />
		<SectionTwo />
		<Blog />
		<SectionThree />
		
	</div>
  );