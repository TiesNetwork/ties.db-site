import React from 'react';

/** Components **/
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Menu, { VARIANT } from './components/Menu';
import Subscribe from './components/Subscribe';

import styles from './Desktop.scss';

const Page = ({ children, menu }) => (
  <div className={styles.Root}>
    <div className={styles.Header}>
      <div className={styles.HeaderLeft}>
        <img
          alt="Ties.DB"
          className={styles.HeaderLogo}
          src={require('./assets/logo.svg')}
        />

        <div className={styles.HeaderRate}>
          <strong>1 TIE</strong> = 0.671125$ (+12,24%)
        </div>
      </div>

      <div className={styles.HeaderCenter}>
        <Menu
          menu={menu}
          variant={VARIANT.DESKTOP}
        />
      </div>

      <div className={styles.HeaderRight}>
        <a className={styles.HeaderAction} href="/">
          Rent your drive
        </a>
      </div>
    </div>

    <div className={styles.Container}>
      {children}
    </div>

    <div className={styles.Footer}>
      <Subscribe />
      <Footer menu={menu} />
      <Copyright />
    </div>
  </div>
)

export default Page;
