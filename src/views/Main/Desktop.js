import React from 'react';

/** Components **/
import Cases from './components/Cases';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Partners from './components/Partners';
import Roadmap from './components/Roadmap';
import WhyNeed from './components/WhyNeed';

import styles from './Desktop.scss';

const LandingMain = () => (
  <div className={styles.Root}>
    <Features />
    <WhyNeed />
    <HowItWorks />
    <Cases />
    <Partners />
    <Roadmap />
  </div>
)

export default LandingMain;
