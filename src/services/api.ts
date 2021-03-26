export const getMode = () => {
  if (window.location.hostname === 'localhost') {
    return true;
  }
};
