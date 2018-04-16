import classNames from 'classnames';
import React, { createElement } from 'react';

import styles from './Menu.scss';

const Menu = ({
  menu,
}) => (
  <div className={styles.Root}>
    <div className={styles.Company}>
      <img
        alt="Ties.DB"
        className={styles.CompanyLogo}
        src={require('../views/Main/assets/logo.svg')}
      />

      <div className={styles.CompanyRate}>
        <strong>1 TIE</strong> = 0.671125$ (+12,24%)
      </div>
    </div>

    <div className={styles.Nav}>
      {menu.map(({ items, link, title }, index) => {
        const titleClassName = classNames(styles.ItemTitle, {
          [styles.ItemTitleWithCaret]: !!items,
          [styles.ItemTitleWithLink]: !!link,
        });

        return (
          <div className={styles.Item} key={index}>
            {createElement(link ? 'a' : 'div', {
              children: title,
              className: titleClassName,
              href: link,
            })}

            {items && (
              <div className={styles.ItemSubmenu}>
                {items.map(({ link, title }, index) => (
                  <a
                    className={styles.ItemLink}
                    href={link}
                    key={index}
                  >
                    {title}
                  </a>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>

    <div className={styles.Actions}>
      <a
        className={styles.Action}
        href="/"
      >
        Rent your drive
      </a>
    </div>
  </div>
)

export default Menu;
