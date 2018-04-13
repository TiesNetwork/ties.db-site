import React from 'react';

/** Components **/
import Block from 'components/Block';

import styles from './Footer.scss';

const MainFooter = ({ cases }) => (
  <Block className={styles.Root}>
    <div className={styles.Wrapper}>
      <div className={styles.Nav}>
        <div className={styles.NavItem}>
          <div className={styles.NavTitle}>
            About
          </div>

          <a className={styles.NavLink} href="/">
            Features
          </a>

          <a className={styles.NavLink} href="/">
            Roadmap
          </a>

          <a className={styles.NavLink} href="/">
            Team
          </a>
        </div>

        <div className={styles.NavItem}>
          <div className={styles.NavTitle}>
            News
          </div>

          <a className={styles.NavLink} href="/">
            Media
          </a>

          <a className={styles.NavLink} href="/">
            Blog
          </a>
        </div>

        <div className={styles.NavItem}>
          <div className={styles.NavTitle}>
            Docs
          </div>

          <a className={styles.NavLink} href="/">
            White paper
          </a>

          <a className={styles.NavLink} href="/">
            Yellow paper
          </a>

          <a className={styles.NavLink} href="/">
            Short Guide
          </a>
        </div>

        <div className={styles.NavItem}>
          <div className={styles.NavTitle}>
            FAQ
          </div>
        </div>
      </div>

      <div className={styles.Right}>
        Watch the Video

        <div className={styles.Video} />
      </div>
    </div>
  </Block>
)

export default MainFooter;
