import * as Yup from 'yup';

export default {
  name: Yup.string()
    .max(100, 'O nome pode conter no máximo 100 dígitos')
    .required('Nome obrigatório'),
  office: Yup.string().required('Cargo obrigatório'),
  area: Yup.string().required('Área obrigatória'),
  phone: Yup.string()
    .max(15, 'O número deve conter no máximo 15 dígitos')
    .required('Telefone obrigatório'),
  company: Yup.string().required('Empresa obrigatória'),
};
