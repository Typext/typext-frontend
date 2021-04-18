interface UserInfo {
  name: string;
  email: string;
}

interface UserProps {
  name: string;
  email: string;
  office: string;
  company: string;
  phone: string;
  area: string;
  type: string;
}

export function getUser(): UserProps {
  const storegedUser = <string>localStorage.getItem('@Typext:user');

  const user = JSON.parse(storegedUser);

  return user;
}

export function getInviteInfo(): UserInfo {
  const storagedUserInfo = <string>localStorage.getItem('@Typext:invite_data');

  const userData: UserInfo = JSON.parse(storagedUserInfo);

  return userData;
}

export function getUserToken() {
  const token = <string>localStorage.getItem('@Typext:token');

  return token;
}
