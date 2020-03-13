import React from "react"
import PropTypes from "prop-types"

export const SocialNetworkLink = (props) => {
  const socialNetworkStyle = {
    textDecoration: 'none',
    boxShadow: 'none',
  };
  return (
    <a
      href={props.href}
      style={{
        ...socialNetworkStyle,
        color: props.color
      }}
      >
        {props.children}
    </a>
  )
}

SocialNetworkLink.propTypes = {
  href: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
    ]).isRequired
}
