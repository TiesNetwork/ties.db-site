import classNames from 'classnames';
import React from 'react';

/** Components **/
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Menu, { VARIANT } from './components/Menu';
import Subscribe from './components/Subscribe';

import styles from './Mobile.scss';

const Page = ({
  children,
  handleMenuToggle,
  menu,
  menuIsOpened,
}) => {
  const className = classNames(styles.Root, {
    [styles.RootWithMenu]: menuIsOpened,
  });

  return (
    <div className={className}>
      <div className={styles.Header}>
        <div className={styles.Rate}>
          <strong>1 TIE</strong>&nbsp;=&nbsp;0.671125$ (+12,24%)
        </div>

        <div className={styles.HeaderContainer}>
          <img
            alt="Ties.DB"
            className={styles.HeaderLogo}
            src={require('./assets/logo.svg')}
          />

          <button
            className={styles.HeaderBurger}
            onClick={handleMenuToggle}
          />
        </div>

        {menuIsOpened && (
          <div className={styles.HeaderDropdown}>
            <div className={styles.Menu}>
              <Menu
                menu={menu}
                variant={VARIANT.MOBILE}
              />
            </div>

            <div className={styles.Rent}>
              <a className={styles.RentAction} href="/">
                Rent your drive
              </a>
            </div>
          </div>
        )}
      </div>

      <div className={styles.Container}>
        {children}

        <Subscribe />
        <Footer menu={menu} />
        <Copyright />
      </div>
    </div>
  );
}

export default Page;
