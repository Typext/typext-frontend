import React from 'react';
import { Route as ReactRoute, Redirect } from 'react-router-dom';

import { useAuth } from 'contexts/auth';
import Header from 'components/Header';
import RequiredLogin from 'components/RequiredLogin';
import { getUser, getUserToken } from 'services/auth';

interface RouteProps {
  component: Function;
  path: string;
  exact?: boolean;
  isPrivate?: boolean;
  onlyAdmin?: boolean;
}

const Route = ({
  component: Component,
  isPrivate,
  onlyAdmin,
  ...rest
}: RouteProps) => {
  const { user: userContext } = useAuth();
  const user = getUser();
  const userIsAdmin = user?.type === 'Admin';
  const userToken = getUserToken();

  const userIsAuthenticated = !!user && !!userToken;

  if (onlyAdmin && !userIsAdmin) {
    return <Redirect to="404" />;
  }

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
  onlyAdmin: false,
  isPrivate: false,
};

export default Route;
