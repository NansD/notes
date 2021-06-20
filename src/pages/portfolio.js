/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';
import './portfolio.css';
import { rhythm, scale } from '../utils/typography';
import Bio from '../components/bio/bio';
import SeeArticles from '../components/see-articles/see-articles';
import SeeTags from '../components/see-tags/see-tags';

export default function Portfolio({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Portfolio"
        description="List of projects I took part to"
      />
      <SeeArticles />
      <SeeTags />
      <h1>Projects</h1>
      <p>
        Here are some projects I worked for !
      </p>
      {posts.map(({ node }) => {
        const post = node;
        return (
          <>
            <hr />
            <article>
              <section dangerouslySetInnerHTML={{ __html: post.html }} />
            </article>
          </>
        );
      })}
      <footer>
        <Bio />
      </footer>

    </Layout>
  );
}
Portfolio.propTypes = PropTypes.shape({
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}).isRequired;

export const projectsQuery = graphql`
query {
  site {
    siteMetadata {
      title
      description
    }
  }
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: { fileAbsolutePath: { regex: "/portfolio/"}}) {
    edges {
      node {
        excerpt
        html
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
}
`;
