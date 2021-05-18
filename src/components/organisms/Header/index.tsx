import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from 'contexts/auth';

import { getUser } from 'services/auth';

import addIcon from 'assets/add_icon.svg';
import homeIcon from 'assets/home_icon.svg';
import shortLogo from 'assets/short_logo.svg';
import logoutIcon from 'assets/logout_icon.svg';
import UserIcons from 'assets/user_gray.svg';

import { StyledHeader } from './styles';

const Header = () => {
  const user = getUser();
  const history = useHistory();
  const { signOut } = useAuth();

  const handleLogout = useCallback(() => {
    signOut();

    history.push('/');
  }, [signOut, history]);

  const handleNavigateToHome = useCallback(() => {
    history.push('/home');
  }, [history]);

  const handleNavigateToMinute = useCallback(() => {
    history.push('/minute');
  }, [history]);

  const handleNavigateToUserUpdate = useCallback(() => {
    history.push('/user/update');
  }, [history]);

  return (
    <StyledHeader>
      <section className="shortOptions">
        <button type="button" onClick={handleNavigateToHome}>
          <img src={homeIcon} alt="home" />
        </button>

        <button type="button" onClick={handleNavigateToMinute}>
          <img src={addIcon} alt="minute" />
        </button>
      </section>

      <figure>
        <a href="/landing-page">
          <img src={shortLogo} className="logo" alt="" />
        </a>
      </figure>

      <section className="usernameAndLogout">
        <button type="button" onClick={handleNavigateToUserUpdate}>
          <img src={UserIcons} alt="" />
          <h1>{user?.name || 'Nome do usuário'}</h1>
        </button>

        <button type="button" onClick={handleLogout}>
          <img src={logoutIcon} alt="logout" />
        </button>
      </section>
    </StyledHeader>
  );
};

export default Header;
