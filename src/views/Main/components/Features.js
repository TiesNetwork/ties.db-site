import React from 'react';

/** Components **/
import Block from 'components/Block';

import styles from './Features.scss';

const MainFeatures = () => (
  <Block
    className={styles.Root}
    title="Key features of Ties.DB"
  >
    <div className={styles.Features}>
      <div className={styles.Feature}>
        <div className={styles.FeatureIcon} />

        <div className={styles.FeatureTitle}>
          DECENTRALIZATION
        </div>

        <div className={styles.FeatureDescription}>
          The absence of&nbsp;a&nbsp;single center control and&nbsp;failure,
          a&nbsp;completely self&ndash;organized network.
        </div>
      </div>

      <div className={styles.Feature}>
        <div className={styles.FeatureIcon} />

        <div className={styles.FeatureTitle}>
          ADVANCED SEARCH
        </div>

        <div className={styles.FeatureDescription}>
          Parallel operation of&nbsp;many servers ensures
          high speed of&nbsp;processing requests.
        </div>
      </div>

      <div className={styles.Feature}>
        <div className={styles.FeatureIcon} />

        <div className={styles.FeatureTitle}>
          MODIFIABLE
        </div>

        <div className={styles.FeatureDescription}>
          Ability to&nbsp;edit and&nbsp;delete previously
          posted data for&nbsp;their owner.
        </div>
      </div>
    </div>

    <div className={styles.More}>
      <a className={styles.MoreLink} href="/">
        See all features
      </a>
    </div>

    <div className={styles.Actions}>
      <a className={styles.ActionsLink} href="/">
        Yellow paper
      </a>

      <a className={styles.ActionsLink} href="/">
        Short guide
      </a>

      <a className={styles.ActionsLink} href="/">
        White paper
      </a>
    </div>
  </Block>
)

export default MainFeatures;
