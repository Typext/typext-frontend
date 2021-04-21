import React from 'react';
import logoIcon from 'assets/logo.svg';

import * as s from './styles';

const TypextLogo = () => {
  return (
    <s.Link href="/">
      <s.Image src={logoIcon} alt="logo" />
    </s.Link>
  );
};

export default TypextLogo;
