import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import addIcon from '../../assets/add_icon.svg';
import homeIcon from '../../assets/home_icon.svg';
import shortLogo from '../../assets/short_logo.svg';
import logoutIcon from '../../assets/logout_icon.svg';

import { StyledHeader } from './styles';

const Header = () => {
  const history = useHistory();

  const handleLogout = useCallback(() => {
    history.push('/');
    localStorage.removeItem('tpxt_user');
    localStorage.removeItem('tpxt_tkn');
  }, [history]);

  const handleNavigateToHome = useCallback(() => {
    history.push('/');
  }, [history]);

  const handleNavigateToMinute = useCallback(() => {
    history.push('/minute');
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
        <img src={shortLogo} className="logo" alt="" />
      </figure>

      <section className="usernameAndLogout">
        <h1>Nome do usuário</h1>

        <button type="button" onClick={handleLogout}>
          <img src={logoutIcon} alt="logout" />
        </button>
      </section>
    </StyledHeader>
  );
};

export default Header;
