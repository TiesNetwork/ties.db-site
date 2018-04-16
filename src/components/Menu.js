import classNames from 'classnames';
import React, { createElement } from 'react';
import { compose, withStateHandlers } from 'recompose';

import styles from './Menu.scss';

const Menu = ({
  menu,
  onHamburgerClick,
  opened,
}) => {
  const className = classNames(styles.Root, {
    [styles.RootOpened]: !!opened
  });

  return (
    <div className={className}>
      <div className={styles.Company}>
        <img
          alt="Ties.DB"
          className={styles.CompanyLogo}
          src={require('../views/Main/assets/logo.svg')}
        />

        <div className={styles.CompanyRate}>
          <strong>1 TIE</strong> = 0.671125$ (+12,24%)
        </div>

        <button
          className={styles.Hamburger}
          onClick={onHamburgerClick}
        />
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
  );
}

export default Menu;
