// components/TeamIcon.js
import React from 'react';
import PropTypes from 'prop-types';

// Define the available colors
const COLORS = {
  blue: 'bg-blue-600',
  red: 'bg-red-500',
  green: 'bg-green-600',
  yellow: 'bg-yellow-400',
  purple: 'bg-purple-600',
  pink: 'bg-pink-500',
  indigo: 'bg-indigo-500',
  teal: 'bg-teal-500',
  orange: 'bg-orange-500',
  brown: 'bg-orange-800',
  gray: 'bg-gray-500',
  black: 'bg-black',
  gold: 'bg-yellow-600',
  white: 'bg-gray-100',

};

const TeamIcon = ({ leftColor, rightColor, size }) => {
  return (
    <div className="relative" style={{ width: `${1.15 * size}em`, height: `${size}em` }}>
      <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden">
        <div className={`absolute inset-0 w-full h-full ${COLORS[leftColor]} clip-left-60`}></div>
        <div className={`absolute inset-0 w-full h-full ${COLORS[rightColor]} clip-right-60`}></div>
      </div>
    </div>
  );
};

TeamIcon.propTypes = {
  leftColor: PropTypes.oneOf(Object.keys(COLORS)).isRequired,
  rightColor: PropTypes.oneOf(Object.keys(COLORS)).isRequired,
  size: PropTypes.number,
};

TeamIcon.defaultProps = {
  size: 4, // default size in em units
};

export default TeamIcon;
