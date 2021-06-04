import * as Yup from 'yup';

export const schema = Yup.object().shape({
  email: Yup.string()
    .required('O email é obrigatório')
    .email('Digite um email valído'),
  name: Yup.string().required('O nome é obrigatório'),
  title: Yup.string()
    .max(3, 'O titulo / cargo pode conter no maximo 3 caracteres')
    .required('O titulo / cargo é obrigatório'),
  company: Yup.string().required('A empresa é obrigatória'),
  phone: Yup.string()
    .max(15, 'O número pode conter no máximo 15 dígitos')
    .required('Telefone obrigatório'),
});
