import React from 'react';
import { useNavigate, useRouteError, Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center mt-5 py-5">
      <div>
        <h1 className="text-red-500">Uh oh! We&apos;ve got a problem!</h1>
        <p className="text-semibold text-red-700 mt-4">{error.message || error.statusText}</p>

        <div>
          <Button type="button" onClick={() => navigate(-1)}>
            <span>Go Back</span>
          </Button>
          <Link to="/">
            <Button><span>Go Home</span></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
