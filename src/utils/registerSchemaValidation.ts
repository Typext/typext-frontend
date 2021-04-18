import * as Yup from 'yup';

export default {
  name: Yup.string().required('Nome obrigatório'),
  office: Yup.string().required('Cargo obrigatório'),
  area: Yup.string().required('Área obrigatória'),
  phone: Yup.string().required('Telefone obrigatório'),
  password: Yup.string().required('Senha obrigatória'),
  company: Yup.string().required('Empresa obrigatória'),
  email: Yup.string().email().required('Email obrigatório'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Senhas devem ser iguais',
  ),
};
