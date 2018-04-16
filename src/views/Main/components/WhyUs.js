
import React from 'react';

/** Components **/
import Block from 'components/Block';

import styles from './WhyUs.scss';

const MainWhyUs = () => (
  <Block
    className={styles.Root}
    title="Why us"
  >
    <img
      alt="Why us"
      className={styles.ImageDesktop}
      src={require('../assets/why_us/table.svg')}
    />

    <img
      alt="Why us"
      className={styles.ImageMobile}
      src={require('../assets/why_us/table_mob_head.svg')}
    />

    <img
      alt="Why us"
      className={styles.ImageMobile}
      src={require('../assets/why_us/table_mob_body.svg')}
    />
  </Block>
)

export default MainWhyUs;
