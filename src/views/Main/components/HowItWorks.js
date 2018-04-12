import React from 'react';

/** Components **/
import Block from 'components/Block';

import styles from './HowItWorks.scss';

const MainHowItWorks = () => (
  <Block
    className={styles.Root}
    title="How it works"
  >
    <div className={styles.List}>
      <div className={styles.Item}>
        <div className={styles.ItemIcon} />

        <div className={styles.ItemTitle}>
          NETWORK ARRANGEMENT
        </div>

        <div className={styles.ItemDescription}>
          Все предоставляемые серверы объеденены в&nbsp;одну систему.
        </div>
      </div>

      <div className={styles.Item}>
        <div className={styles.ItemIcon} />

        <div className={styles.ItemTitle}>
          UPLOAD
        </div>

        <div className={styles.ItemDescription}>
          Кто угодно может разместить контент.
          Он&nbsp;распределяется по&nbsp;разным серверам.
        </div>
      </div>

      <div className={styles.Item}>
        <div className={styles.ItemIcon} />

        <div className={styles.ItemTitle}>
          SEARCH AND DOWNLOAD
        </div>

        <div className={styles.ItemDescription}>
          Кто угодно может запросить контент
          и&nbsp;он&nbsp;соберется в&nbsp;единое целое.
        </div>
      </div>
    </div>

    <div className={styles.Actions}>
      <a className={styles.Action} href="/">
        Short guide
      </a>
    </div>
  </Block>
)

export default MainHowItWorks;
