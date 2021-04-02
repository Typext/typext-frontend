import React from 'react';
import { useHistory } from 'react-router-dom';

import addIcon from '../../assets/add_icon.svg';
import homeIcon from '../../assets/home_icon.svg';
import shortLogo from '../../assets/short_logo.svg';
import logoutIcon from '../../assets/logout_icon.svg';

import { StyledHeader } from './styles';

const Header = () => {
  const history = useHistory();

  const handleNavigateToHome = () => {
    history.push('/');
  };

  return (
    <StyledHeader>
      <section className="shortOptions">
        <button type="button" onClick={handleNavigateToHome}>
          <img src={homeIcon} alt="" />
        </button>

        <img src={addIcon} alt="" />
      </section>

      <img src={shortLogo} className="logo" alt="" />

      <section className="usernameAndLogout">
        <h1>Nome do usuário</h1>

        <img src={logoutIcon} alt="" />
      </section>
    </StyledHeader>
  );
};

export default Header;
