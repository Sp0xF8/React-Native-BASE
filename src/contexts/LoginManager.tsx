import React, { createContext, useState, ReactNode } from 'react';

import AuthUser from '../classes/Auth';


//define type for AuthUser
export type AuthUserType = AuthUser | null;

interface UserContextProps {
  user:AuthUserType,
  setUser: (user:AuthUserType) => void
}


// Create the context
const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {}
});

// Create a provider component
const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUserType>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};


export { UserProvider, UserContext };