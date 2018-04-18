import React from 'react';

/** Components **/
import Page from 'components/Page';

import Cases from './components/Cases';
import Features from './components/Features';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import Media from './components/Media';
import Partners from './components/Partners';
import Roadmap from './components/Roadmap';
import WhyNeed from './components/WhyNeed';
import WhyUs from './components/WhyUs';

import styles from './Desktop.scss';

const LandingMain = () => (
  <Page className={styles.Root}>
    <Header />
    <Features />
    <WhyNeed />
    <HowItWorks />
    <WhyUs />
    <Cases />
    <Media />
    <Partners />
    <Roadmap />
  </Page>
)

export default LandingMain;
