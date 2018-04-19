import classNames from 'classnames';
import React, { createElement } from 'react';
import { compose, withStateHandlers } from 'recompose';

import styles from './Menu.scss';

const COLOR = {
  DARK: 'Dark',
};

const VARIANT = {
  DESKTOP: 'Desktop',
  DESKTOP_FOOTER: 'DesktopFooter',
  MOBILE: 'Mobile',
  MOBILE_FOOTER: 'MobileFooter',
};

const PageMenu = ({
  color,
  currentId,
  handleItemClick,
  menu,
  opened,
  variant,
}) => {
  const className = classNames(styles.Root, {
    [styles.RootOpened]: !!opened,

    [styles.RootVariantDesktop]: variant === VARIANT.DESKTOP,
    [styles.RootVariantDesktopDark]: color === COLOR.DARK,
    [styles.RootVariantDesktopFooter]: variant === VARIANT.DESKTOP_FOOTER,

    [styles.RootVariantMobile]: variant === VARIANT.MOBILE || variant === VARIANT.MOBILE_FOOTER,
    [styles.RootVariantMobileFooter]: variant === VARIANT.MOBILE_FOOTER,
  });

  return (
    <div className={className}>
      {menu.map(({ id, items, link, title }, index) => {
        const className = classNames(styles.Item, {
          [styles.ItemActive]: currentId === id || variant === VARIANT.DESKTOP_FOOTER,
        });

        const titleClassName = classNames(styles.ItemTitle, {
          [styles.ItemTitleWithCaret]: !!items,
          [styles.ItemTitleWithLink]: !!link,
        });

        return (
          <div
            className={className}
            key={index}
            onClick={() => items && handleItemClick(id)}
          >
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
  );
}

export default compose(
  withStateHandlers(
    props => ({ currentId: null }),
    {
      handleItemClick: state => id => ({ currentId: id === state.currentId ? null : id }),
    }
  )
)(PageMenu);
export { VARIANT };
