import React from 'react';

/** Components **/
import Block from 'components/Block';

import styles from './Copyright.scss';

const MainCopyright = ({ cases }) => (
  <Block className={styles.Root}>
    <div className={styles.Wrapper}>
      <div className={styles.Company}>
        <div className={styles.CompanyInfo}>
          Ties.BV. Limited liability company. KvK-nummer: 69555176
        </div>
      </div>

      <div className={styles.Social}>
        Got questions? Ask us on our channel

        <div className={styles.SocialList}>
          <a className={styles.SocialLink} href="/" />
          <a className={styles.SocialLink} href="/" />
          <a className={styles.SocialLink} href="/" />
          <a className={styles.SocialLink} href="/" />
          <a className={styles.SocialLink} href="/" />
          <a className={styles.SocialLink} href="/" />
          <a className={styles.SocialLink} href="/" />
        </div>
      </div>

      <div className={styles.Links}>
        <a className={styles.Link} href="/">
          Private policy
        </a>

        <a className={styles.Link} href="/">
          Terms and conditions
        </a>
      </div>
    </div>
  </Block>
)

export default MainCopyright;
