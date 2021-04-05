import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string()
    .required('O email é obrigatório')
    .email('Digite um email valído'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default schema;
