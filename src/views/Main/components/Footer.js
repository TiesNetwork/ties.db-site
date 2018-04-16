import classNames from 'classnames';
import { get } from 'lodash';
import React, { createElement } from 'react';
import { connect } from 'react-redux';

/** Components **/
import Block from 'components/Block';

import styles from './Footer.scss';

const MainFooter = ({ menu }) => (
  <Block className={styles.Root}>
    <div className={styles.Wrapper}>
      <div className={styles.Nav}>
        {menu.map(({ items, link, title }, index) => {
          const titleClassName = classNames(styles.NavTitle, {
            [styles.NavTitleWithCaret]: !!items,
            [styles.NavTitleWithLink]: !!link
          });

          return (
            <div className={styles.NavItem}>
              {createElement(link ? 'a' : 'div', {
                children: title,
                className: titleClassName,
                href: link,
              })}

              {items && (
                <div className={styles.NavSubmenu}>
                  {items.map(({ link, title }, index) => (
                    <a className={styles.NavLink} href={link} key={index}>
                      {title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className={styles.Right}>
        Watch the Video

        <div className={styles.Video} />
      </div>
    </div>
  </Block>
)

const mapStateToProps = ({ views }) => ({
  menu: get(views, 'main.menu', []),
})

export default connect(mapStateToProps)(MainFooter);
