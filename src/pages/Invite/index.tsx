import React, { useRef, useState, useCallback } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useAuth } from 'contexts/auth';
import getValidationErrors from 'utils/getValidationErrors';

import InputForm from 'components/InputForm';
import Button from 'components/Button/Button';
import Select from './components/Select';

import { StyleInviteUsers } from './styles';

import InviteConfirmationModal from './components/InviteConfirmationModal';

function InviteUsers() {
  const { inviteUser } = useAuth();

  const formRef = useRef<FormHandles>(null);

  const [openInvitationModal, setOpenInvitationModal] = useState<boolean>(
    false,
  );

  const [userPermission, setUserPermission] = useState<string>('Usuário');

  const handleInviteUser = useCallback(
    async (data: { name: string; email: string }) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('O email é obrigatório')
            .email('Digite um email valído'),
          name: Yup.string().required('O nome é obrigatório'),
        });

        await schema.validate(data, { abortEarly: false });

        setOpenInvitationModal(true);
        inviteUser({
          name: data.name,
          email: data.email,
          type: userPermission,
        });
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [inviteUser, userPermission],
  );

  return (
    <>
      {openInvitationModal && (
        <InviteConfirmationModal onClose={setOpenInvitationModal} />
      )}

      <StyleInviteUsers>
        <h1>Convidar Participante</h1>

        <Form
          ref={formRef}
          className="emailAndPermission"
          onSubmit={handleInviteUser}
        >
          <InputForm title="Nome" name="name" color="black" />

          <InputForm title="E-mail" name="email" color="black" />

          <Select
            title="Nível de permissão"
            values={['Usuário', 'Gerente', 'Admin']}
            getValue={setUserPermission}
          />

          <Button
            color="var(--black)"
            colorText="white"
            size="23.75rem"
            type="submit"
          >
            Convidar
          </Button>
        </Form>
      </StyleInviteUsers>
    </>
  );
}

export default InviteUsers;
