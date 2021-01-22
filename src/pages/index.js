/* eslint-disable react/no-danger */
import React from 'react';
import { Link, graphql } from 'gatsby';

import { PropTypes } from 'prop-types';
import Bio from '../components/bio/bio';
import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';
import { rhythm } from '../utils/typography';

const BlogIndex = ({ data, location }) => {
  const { title: blogTitle, description } = data.site.siteMetadata;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={blogTitle} description={description}>
      <SEO title="All posts" />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        );
      })}
    </Layout>
  );
};

BlogIndex.propTypes = PropTypes.shape({
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          excerpt: PropTypes.string.isRequired,
          fields: PropTypes.shape({
            slug: PropTypes.string.isRequired,
          }).isRequired,
          frontmatter: PropTypes.shape({
            date: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired).isRequired,
    }).isRequired,
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}).isRequired;

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
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
