import React from 'react';

/** Components **/
import Cases from './components/Cases';
import Copyright from './components/Copyright';
import Features from './components/Features';
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks';
import Media from './components/Media';
import Partners from './components/Partners';
import Roadmap from './components/Roadmap';
import Subscribe from './components/Subscribe';
import WhyNeed from './components/WhyNeed';

import styles from './Desktop.scss';

const LandingMain = () => (
  <div className={styles.Root}>
    <Features />
    <WhyNeed />
    <HowItWorks />
    <Cases />
    <Media />
    <Partners />
    <Roadmap />
    <Subscribe />
    <Footer />
    <Copyright />
  </div>
)

export default LandingMain;
