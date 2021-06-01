import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string().required('A descrição é obrigatória'),
  deadline: Yup.date().required('O prazo é obrigatório'),
  responsible: Yup.string().required('O responsável é obrigatório'),
});
