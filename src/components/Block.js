import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Block.scss';

const Block = ({
  children,
  className: classNameProp,
  title,
}) => {
  const className = classNames(classNameProp, styles.Root);

  return (
    <div className={className}>
      {title && (
        <div className={styles.Title}>
          {title}
        </div>
      )}

      <div className={styles.Container}>
        {children}
      </div>
    </div>
  );
}

Block.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
};

export default Block;
