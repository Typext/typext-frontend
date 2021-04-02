import React from 'react';

import Header from 'components/Header';

import { Route as ReactRoute } from 'react-router-dom';

interface RouteProps {
  component: Function;
  path: string;
  exact?: boolean;
  isPrivate?: boolean;
}

const Route = ({ component: Component, isPrivate, ...rest }: RouteProps) => {
  return (
    <ReactRoute
      {...rest}
      render={() => {
        return (
          <>
            {isPrivate && <Header />}
            <Component />
          </>
        );
      }}
    />
  );
};

Route.defaultProps = {
  exact: false,
  isPrivate: false,
};

export default Route;
