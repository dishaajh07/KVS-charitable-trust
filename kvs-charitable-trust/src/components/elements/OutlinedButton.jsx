import React from 'react';
import PropTypes from 'prop-types';
import styles from './OutlinedButton.module.css';

const OutlinedButton = ({
  children,
  gradient,
  outlineColor = '#000',
  showOutline = false,
  textColor = '#000',
  borderRadius = '6px',
  width,
  size = 'medium',
  onClick,
  className = '',
  ...props
}) => {
  const buttonStyle = {
    background: gradient ? gradient : 'transparent',
    color: textColor,
    border: showOutline ? `2px solid ${outlineColor}` : 'none',
    borderRadius,
    width: width ? width : undefined,
  };

  return (
    <button
      className={`${styles.button} ${className}`}
      style={buttonStyle}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

OutlinedButton.propTypes = {
  children: PropTypes.node.isRequired,
  gradient: PropTypes.string,
  outlineColor: PropTypes.string,
  showOutline: PropTypes.bool,
  textColor: PropTypes.string,
  borderRadius: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default OutlinedButton;