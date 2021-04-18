import * as Yup from 'yup';

export default {
  name: Yup.string().required('Nome obrigatório'),
  office: Yup.string().required('Cargo obrigatório'),
  area: Yup.string().required('Área obrigatória'),
  phone: Yup.string().required('Telefone obrigatório'),
  company: Yup.string().required('Empresa obrigatória'),
};
