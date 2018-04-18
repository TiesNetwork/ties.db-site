import classNames from 'classnames';
import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { compose, withStateHandlers } from 'recompose';

/** Components **/
import Block from 'components/Block';

import styles from './Header.scss';

const MainHeader = ({
  handleHamubrgerClick,
  menu,
  menuIsOpened,
}) => {
  const className = classNames(styles.Root, {
    [styles.RootWithMenu]: !!menuIsOpened,
  });

  return (
    <Block className={className}>
      <div className={styles.Wrapper}>
        <div className={styles.Title}>
          Discover
          <br />
          boundless opportunities
          <br />
          with Ties.DB
        </div>

        <div className={styles.Slogan}>
          A&nbsp;public, distributed and&nbsp;decentralized&nbsp;database
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
  );
}

const mapStateToProps = ({ views }) => ({
  menu: get(views, 'main.menu', []),
})

export default compose(
  connect(mapStateToProps),
  withStateHandlers(
    props => ({ menuIsOpened: false }),
    {
      handleHamubrgerClick: state => () => ({ menuIsOpened: !state.menuIsOpened }),
    }
  )
)(MainHeader);
