import { Link } from 'gatsby';
import React from 'react';
import { FcCollaboration } from 'react-icons/fc';

const SeePortfolio = () => (
  <div
    style={{
      display: 'flex',
    }}
  >
    <p>
      <FcCollaboration />
      Here are some
      {' '}
      <Link to="/portfolio">
        {' '}
        Projects
        {' '}
      </Link>
      I took part to.
    </p>
  </div>
);

export default SeePortfolio;
