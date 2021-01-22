/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { Link } from 'gatsby';
import React from 'react';

const SeeTags = () => (
  <div
    style={{
      display: 'flex',
    }}
  >
    <p>
      See the topics approached by this blog
      <Link to="/tags"> here</Link>
      .
    </p>
  </div>
);

export default SeeTags;
