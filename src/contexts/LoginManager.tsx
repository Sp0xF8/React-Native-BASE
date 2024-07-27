import React, { createContext, useState, ReactNode } from 'react';

import AuthUser from '../classes/Auth';
import User from '../classes/User';


//define type for AuthUser
export type AuthUserType = AuthUser | null;

interface UserContextProps {
  user:AuthUserType,
  Login: (email: string, password: string, callback: (message: string) => void) => void;
  Logout: (callback: (message: string) => void) => void;
}


// Create the context
const UserContext = createContext<UserContextProps>({
  user: null,
  Login: () => {},
  Logout: () => {}
});





// Create a provider component
const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const [user, setUser] = useState<AuthUserType>(null);

  const Login = (email: string, password: string, callback: (message: string) => void) => {

    console.log("Inside Login")
    console.log(email, password)
    // Assuming the User class and AuthUser class are already defined elsewhere in your code
    let user_obj = new User(1, 'Billy', 23, [23.3, 38.3], ['tits@burgler.com', 'mother@fucker.py'], [1, 4, 8, 23, 24], 'Super basic bitch', []);
  
    const authed = new AuthUser('blast', user_obj);
  
    setUser(authed);
  
    // Call the callback with a success message
    callback('Login successful!');
  };

  const Logout = (callback:(message:string) => void) => {
    setUser(null);
    callback('Logged out successfully');
  }


  return (
    <UserContext.Provider value={{ user, Login, Logout }}>
      {children}
    </UserContext.Provider>
  );
};





export { UserProvider, UserContext };