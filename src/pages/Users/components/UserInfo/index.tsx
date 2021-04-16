import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface UserInfoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  user: {
    id: string;
    name: string;
    type: string;
  };
}

const UserInfo = ({ user, ...rest }: UserInfoProps) => {
  return (
    <Container {...rest}>
      <span>{user.name}</span>
      <span>{user.type}</span>
    </Container>
  );
};

export default UserInfo;
