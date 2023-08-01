import { ReactNode, createContext, useEffect, useState } from 'react';
import { IUser, userApi } from '../api/user.api';

interface IProps {
  children: ReactNode;
}

type ContextType = {
  user: IUser;
};

export const UserContext = createContext({} as ContextType);

export default function UserProvider({ children }: IProps) {
  const [user, setUser] = useState<IUser>({} as IUser);

  useEffect(() => {
    userApi
      .find('rlima-ferreira')
      .then(({ data }) => setUser(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
