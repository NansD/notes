/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import {
  FaDev, FaLinkedin, FaTwitterSquare, FaGithubSquare,
} from 'react-icons/fa';
import { rhythm } from '../utils/typography';
import SocialNetworkLink from './social-network-link';

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
            github
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <div
      style={{
        display: 'flex',
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
          borderRadius: '100%',
        }}
        imgStyle={{
          borderRadius: '50%',
        }}
      />
      <p>
        Written by
        {' '}
        <strong>{author.name}</strong>
        {' '}
        {author.summary}
        {' '}
        <br />
        Find me on :
        <br />
        <SocialNetworkLink
          href={`https://twitter.com/${social.twitter}`}
          color="#1da1f2"
        >
          <FaTwitterSquare size="2em" />
        </SocialNetworkLink>
        <SocialNetworkLink
          href={`https://www.linkedin.com/in/${social.linkedIn}/`}
          color="#0077b5"
        >
          <FaLinkedin size="2em" />
        </SocialNetworkLink>
        <SocialNetworkLink
          href={`https://dev.to/${social.devTo}`}
          color="#000000"
        >
          <FaDev size="2em" />
        </SocialNetworkLink>
        <SocialNetworkLink
          href={`https://github.com/${social.github}`}
          color="#000000"
        >
          <FaGithubSquare size="2em" />
        </SocialNetworkLink>
      </p>
    </div>
  );
};

export default Bio;
