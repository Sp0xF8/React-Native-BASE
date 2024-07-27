import React, { useContext } from 'react';


import User from '../classes/User'
import AuthUser from '../classes/Auth'


import { UserContext } from '../contexts/LoginManager'



function Login(mail:string, password:string): boolean {

    const {user, setUser } = useContext(UserContext)

    let user_obj = new User(1, 'Billy', 23, [23.3, 38.3], ['tits@burgler.com', 'mother@fucker.py'], [1,4,8,23,24], 'Super basic bitch', []);

    const authed = new AuthUser('blast', user_obj);

    setUser(authed);



    return true
}


export default Login;
