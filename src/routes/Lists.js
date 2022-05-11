import React from 'react';
import { Link } from 'react-router-dom';

function Lists() {
  return (
    <React.Fragment>
      <h2>
        <li>
          <Link to='/hello'>Intro</Link>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </h2>
      <hr />
    </React.Fragment>
  );
}

export default Lists;
