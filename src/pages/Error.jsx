import React from 'react';
import { useNavigate, useRouteError, Link } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="error">
      <h1>Uh oh! We&apos;ve got a problem!</h1>
      <p>{error.message || error.statusText}</p>
      <div>
        <button type="button" onClick={() => navigate(-1)}>
          <span>Go Back</span>
        </button>
        <Link to="/">
          <span>Go Home</span>
        </Link>
      </div>
    </div>
  );
};

export default Error;
