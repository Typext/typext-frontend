import React from 'react';

import DefaultModal from 'components/DefaultModal';
import Loader from 'components/Loader';
import { ReactComponent as LikeIcon } from 'assets/like.svg';
import { ReactComponent as DislikeIcon } from 'assets/dislike.svg';
import { useUsers } from 'contexts/user';

import { Container } from './styles';

interface ModalUpdateUserProps {
  onClose: Function;
}

const ModalUpdateUser = ({ onClose }: ModalUpdateUserProps) => {
  const { updateUserInfoError, updateUserInfoLoader } = useUsers();

  return (
    <DefaultModal onClose={onClose}>
      <Container>
        {updateUserInfoLoader ? (
          <Loader />
        ) : (
          <>
            {updateUserInfoError ? <DislikeIcon /> : <LikeIcon />}
            <h1>{updateUserInfoError || 'ATUALIZADO!'}</h1>
            {!updateUserInfoError && <p>VOLTANDO...</p>}
          </>
        )}
      </Container>
    </DefaultModal>
  );
};

export default ModalUpdateUser;
