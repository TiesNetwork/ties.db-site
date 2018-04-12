import React from 'react';

/** Components **/
import Block from 'components/Block';

import styles from './WhyNeed.scss';

const MainWhyNeed = () => (
  <Block
    className={styles.Root}
    title="Why you really need Ties.DB"
  >
    <div className={styles.List}>
      <div className={styles.Item}>
        <div className={styles.ItemLeft} />

        <div className={styles.ItemRight}>
          <div className={styles.ItemTitle}>
            DAPPS
          </div>

          <div className={styles.ItemPreface}>
            Centralized storage solutions are&nbsp;vulnerable.
            Decentralized solutions used Today,
            they do&nbsp;not&nbsp;allow a&nbsp;quick search
            and&nbsp;modification of&nbsp;data.
          </div>

          <div className={styles.ItemDescription}>
            Ties.DB servers are&nbsp;completely independent,
            scattered across the&nbsp;planet and&nbsp;accept payment
            in&nbsp;the&nbsp;crypto currency (TIE-token),
            which gives dapps-y very flexible options
            for&nbsp;working with the&nbsp;network Ties.DB.
          </div>

          <div className={styles.ItemActions}>
            <a className={styles.ItemLink} href="/">
              BE 100% DECENTRALIZED
            </a>
          </div>
        </div>
      </div>

      <div className={styles.Item}>
        <div className={styles.ItemLeft} />

        <div className={styles.ItemRight}>
          <div className={styles.ItemTitle}>
            BLOCKCHAINS
          </div>

          <div className={styles.ItemPreface}>
            Today there is&nbsp;no effective storage solution
            data that entails the&nbsp;difficulty
            of&nbsp;attracting and&nbsp;hold dApps.
          </div>

          <div className={styles.ItemDescription}>
            We&nbsp;take from a&nbsp;concrete block system data encryption
            to&nbsp;generate keys in&nbsp;the&nbsp;signature
            and&nbsp;suggest that the creation of&nbsp;decentralized
            applications for This block, announcing that
            the&nbsp;data will be&nbsp;stored in&nbsp;Ties.DB.
          </div>

          <div className={styles.ItemActions}>
            <a className={styles.ItemLink} href="/">
              BE 100% COMPETITIVE
            </a>
          </div>
        </div>
      </div>

      <div className={styles.Item}>
        <div className={styles.ItemLeft} />

        <div className={styles.ItemRight}>
          <div className={styles.ItemTitle}>
            INTERNATIONAL PROJECTS
          </div>

          <div className={styles.ItemPreface}>
            It&nbsp;is&nbsp;difficult to&nbsp;build self-service today
            cross-border infrastructure.
          </div>

          <div className={styles.ItemDescription}>
            Large projects can&nbsp;store Ties.DB file indexes,
            and&nbsp;in&nbsp;the&nbsp;future, store in&nbsp;Ties.DB
            and&nbsp;the&nbsp;files themselves. Any large project
            can make a&nbsp;fork of&nbsp;Ties.DB network to&nbsp;store data
            in&nbsp;a&nbsp;separate network.
          </div>

          <div className={styles.ItemActions}>
            <a className={styles.ItemLink} href="/">
              BE 100% BOUNDLESS
            </a>
          </div>
        </div>
      </div>
    </div>
  </Block>
)

export default MainWhyNeed;
