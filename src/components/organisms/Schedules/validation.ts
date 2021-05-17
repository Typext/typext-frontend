import * as Yup from 'yup';

export const schema = Yup.object().shape({
  schedule: Yup.string().required('A pauta é obrigatória'),
});
