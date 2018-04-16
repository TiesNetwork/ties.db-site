import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

/** Components **/
import Block from 'components/Block';

import styles from './Media.scss';

const MainMedia = ({ news }) => (
  <Block
    className={styles.Root}
    title="Media"
  >
    <div className={styles.List}>
      {news.map(({ date, description, icon, link, title }, index) => (
        <div className={styles.Item} key={index}>
          <a className={styles.ItemTitle} href={link}>
            {title}
          </a>

          <div className={styles.ItemDescription}>
            {description}
          </div>

          <div className={styles.ItemDate}>
            {date}
          </div>
        </div>
      ))}
    </div>
  </Block>
)

const mapStateToProps = ({ views }) => ({
  news: get(views, 'main.media', []),
})

export default connect(mapStateToProps)(MainMedia);
