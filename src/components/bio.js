/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FaDev, FaLinkedin, FaTwitterSquare, FaGithubSquare } from "react-icons/fa"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            linkedIn
            devTo
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  const socialNetworkStyle = {
    textDecoration: 'none',
    boxShadow: 'none',
  };
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{author.name}</strong> {author.summary}
        {` `}
        <br/>
        Find me on :
        <br />
        <a 
          href={`https://twitter.com/${social.twitter}`}
          style={{
            ...socialNetworkStyle,
            color: '#1da1f2'
          }}>
          <FaTwitterSquare size='2em' />
        </a>
        <a 
          href={`https://www.linkedin.com/in/${social.linkedIn}/`}
          style={{
            ...socialNetworkStyle,
            color: '#0077b5'
          }}>
          <FaLinkedin size='2em' />
        </a>
        <a 
          href={`https://dev.to/${social.devTo}`} 
          style={{
            ...socialNetworkStyle,
            color: 'black'
          }}>
          <FaDev size='2em' />
        </a>
        <a 
          href={`https://github.com/${social.github}`} 
          style={{
            ...socialNetworkStyle,
            color: 'black'
          }}>
          <FaGithubSquare size='2em' />
        </a>
      </p>
    </div>
  )
}

export default Bio
