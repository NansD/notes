import React from "react"

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