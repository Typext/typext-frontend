import * as Yup from 'yup';

export const schema = Yup.object().shape({
  area: Yup.string().required('A area é obrigatória'),
});
