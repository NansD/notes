/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { Link } from 'gatsby';
import React from 'react';

const SeeArticles = () => (
  <div
    style={{
      display: 'flex',
    }}
  >
    <p>
      See the list of articles
      <Link to="/"> here</Link>
      .
    </p>
  </div>
);

export default SeeArticles;
