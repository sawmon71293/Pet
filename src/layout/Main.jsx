import { Outlet, useLoaderData } from 'react-router-dom';
import React from 'react';
import { fetchData } from '../helper';
import Nav from '../components/Nav';

export const mainLoader = () => {
  const userName = fetchData('userName');
  return { userName };
};

const Main = () => {
  const { userName } = useLoaderData();
  return (
    <div>
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
