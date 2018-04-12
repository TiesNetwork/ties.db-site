import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

/** Components **/
import Block from 'components/Block';

import styles from './Cases.scss';

const MainCases = ({ cases }) => (
  <Block
    className={styles.Root}
    title="Ties.DB application cases"
  >
    <div className={styles.List}>
      {cases.map(({ title }, index) => (
        <div className={styles.Item} key={index}>
          <div className={styles.ItemIcon} />

          <div className={styles.ItemTitle}>
            {title}
          </div>
        </div>
      ))}
    </div>
  </Block>
)

const mapStateToProps = ({ views }) => ({
  cases: get(views, 'main.cases', []),
})

export default connect(mapStateToProps)(MainCases);
