// eslint-disable-next-line consistent-return
export const getMode = () => {
  if (window.location.hostname === 'localhost') {
    return true;
  }
};
