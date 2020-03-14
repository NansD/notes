import React from 'react';
import PropTypes from 'prop-types';

const SocialNetworkLink = ({ href, color, children }) => {
  const socialNetworkStyle = {
    textDecoration: 'none',
    boxShadow: 'none',
  };
  return (
    <a
      href={href}
      style={{
        ...socialNetworkStyle,
        color,
      }}
    >
      {children}
    </a>
  );
};

SocialNetworkLink.propTypes = {
  href: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SocialNetworkLink;
