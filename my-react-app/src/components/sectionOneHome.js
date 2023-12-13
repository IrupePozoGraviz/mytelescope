import React from 'react';
import { TrialBtn } from './trialBtn';
import Girl from '../images/girl.svg'
import Star from '../images/stjärna.svg'
import Computer from '../images/nyDator.png'
import '../css/sectionOne.css';

export const SectionOne = () => (
  <main className="home-parent">

{/* detta används Mobil*/}
    <section className="home-mobile">
<h1>Forecast the future</h1>
      <article className="home-mobileP">
        <p>
        Get an instant overview of current demand and forecast where it’s heading.
Create your MyTelescope future index and monitor how you are creating an impact on the future.
        </p>
      </article>
      

    <div className="home-computer-mobile">
    <img src={Computer} className="home-comp" alt="Computer" />
    </div>
    <article className="home-mobile-text">
      <h4 className="home-mobile-four">Turning branded Search signals into demand indicators</h4>
        <p>
        There's an average correlation of 83% between Share of Search methodology with sales, revenue, and market share. It means using branded search data as a data set replacing that when there's a surge in searches, there's a corresponding increase in the number of people purchasing the product - Look for the trend line
        </p>
        </article>
    </section>

{/* detta används from 820px och över*/}

<section className="home-biggerScreen">
  <div className="home-bigger-child">
    <div className="home-title">
<h2 className="home-hOne">Explore. Forecast.</h2> 
      <h3 className="home-hTwo">Track market trends.</h3>
      </div>
      
<article className="home-sibling">
        <p>
        Use MyTelescope AI-powered platform to generate trend dashboards for companies, brands, products, topics and insights for content creations with an impressive average accuracy of 83% by analyzing Share of Search data.
        </p>
      </article>
</div>
      <div className="home-images">
<img src={Girl} className="home-girl" alt="Girl with phone" />
<img src={Star} className="home-star" alt="Star" />
</div>
      </section>
  
    <div className="home-button">
    <TrialBtn />
    </div>

    {/* detta används bara i mini I pad*/}
    <section className="home-biggerScreenIpad">
    <div className="home-computer-ipad">
    <img src={Computer} className="home-compIpad" alt="Computer" />
    </div>
    <article className="home-mobile-textIpad">
      <h4 className="home-mobile-fourIpad">Turning branded Search signals into demand indicators</h4>
        <p>
        There's an average correlation of 83% between Share of Search methodology with sales, revenue, and market share. It means using branded search data as a data set replacing that when there's a surge in searches, there's a corresponding increase in the number of people purchasing the product - Look for the trend line
        </p>
        </article>
    </section>
    
  </main>
);
