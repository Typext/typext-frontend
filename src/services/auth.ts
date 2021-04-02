export function getUser(): any {
  const storegedUser = <string>localStorage.getItem('tpxt_user');

  const user = JSON.parse(storegedUser);

  return user;
}
