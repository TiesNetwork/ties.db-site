import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

/** Components **/
import Block from 'components/Block';
import Menu from 'components/Menu';

import styles from './Header.scss';

const MainHeader = ({ menu }) => (
  <Block className={styles.Root}>
    <div className={styles.Menu}>
      <Menu menu={menu} />
    </div>

    <div className={styles.Wrapper}>
      <div className={styles.Title}>
        Discover
        <br />
        boundless opportunities
        <br />
        with Ties.DB
      </div>

      <div className={styles.Slogan}>
        A public, distributed and decentralized database
        <br />
        with one common thread: trust.
      </div>

      <form className={styles.Form}>
        <input
          className={styles.Input}
          name="email"
          placeholder="Email address"
        />

        <button
          className={styles.Button}
          type="submit"
        >
          Get Early Access
        </button>
      </form>
    </div>
  </Block>
)

const mapStateToProps = ({ views }) => ({
  menu: get(views, 'main.menu', []),
})

export default connect(mapStateToProps)(MainHeader);
