import * as Yup from 'yup';

export default {
  email: Yup.string()
    .required('Email obrigatório')
    .email('Digite um e-mail válido'),
  name: Yup.string().required('Nome obrigatório'),
  role: Yup.string().required('Cargo obrigatório'),
  area: Yup.string().required('Área obrigatória'),
  phone: Yup.string().required('Telefone obrigatório'),
  password: Yup.string().required('Senha obrigatória'),
  enterprise: Yup.string().required('Empresa obrigatória'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Senhas devem ser iguais',
  ),
};
