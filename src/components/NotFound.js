import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404 - Not Found!</h1>
      <Link className="btn btn-light my-3" to="/">
        Go back
      </Link>
    </div>
  );
};

export default NotFound;
