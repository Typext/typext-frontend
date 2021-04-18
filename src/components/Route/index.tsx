import React from 'react';
import { Route as ReactRoute } from 'react-router-dom';

import { useAuth } from 'contexts/auth';
import Header from 'components/Header';
import RequiredLogin from 'components/RequiredLogin';
import { getUser, getUserToken } from 'services/auth';

interface RouteProps {
  component: Function;
  path: string;
  exact?: boolean;
  isPrivate?: boolean;
}

const Route = ({ component: Component, isPrivate, ...rest }: RouteProps) => {
  const { user: userContext } = useAuth();
  const user = getUser();
  const userToken = getUserToken();

  const userIsAuthenticated = !!user && !!userToken;

  return (
    <ReactRoute
      {...rest}
      render={() => {
        return (
          <>
            {isPrivate ? (
              !!userContext || userIsAuthenticated ? (
                <>
                  <Header />
                  <Component />
                </>
              ) : (
                <>
                  <RequiredLogin />
                </>
              )
            ) : (
              <Component />
            )}
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
