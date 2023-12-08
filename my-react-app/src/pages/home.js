import React from 'react';
import { TrialBtn } from '../components/trialBtn';
import Girl from '../images/girl.webp'
import Star from '../images/stjärna.svg'
import Computer from '../images/nyDator.webp'
import '../css/home.css';

export const Home = () => (
  <main className="home-parent">
    <section className="home-child">
<h1 className="home-mobile">Forecast the future</h1>
      <h2 className="home-hOne">Explore. Forecast.</h2> 
      <h3 className="home-hTwo">Track market trends.</h3>
      <article className="home-mobileP">
        <p>
        Get an instant overview of current demand and forecast where it’s heading.
Create your MyTelescope future index and monitor how you are creating an impact on the future.
        </p>
      </article>
      <article className="home-sibling">
        <p>
          This is a simple React app that I created to learn how to use React. 
          It uses React Router to navigate between pages. 
          It also uses React Bootstrap for styling and layout.
        </p>
      </article>
<div className="home-images">
<img src={Girl} className="home-girl" alt="Girl with phone" />
<img src={Star} className="home-star" alt="Star" />
</div>
    </section>
    <div className="home-button">
    <TrialBtn />
    </div>
    <div className="home-computer-mobile">
    <img src={Computer} className="home-comp" alt="Computer" />
    </div>
    <article className="home-mobile-text">
      <h4 className="home-mobile-four">Turning branded Search signals into demand indicators</h4>
        <p>
        There's an average correlation of 83% between Share of Search methodology with sales, revenue, and market share. It means using branded search data as a data set replacing that when there's a surge in searches, there's a corresponding increase in the number of people purchasing the product - Look for the trend line
        </p>
        </article>

        <blog className="home-blog">
        <h5 className="home-blog-h5">Blog</h5>
        </blog>
  </main>
);
