

import User from './User';


class AuthUser {
    private token:string;
    private user:User
    constructor(token:string, user:User) {
        this.token = token;
        this.user = user;
    }

    public getToken():string {
        return this.token;
    }
    public getUser():User {
        return this.user;
    }

    public logOut():boolean {
        this.token = '';
        this.user.destroy();

        return true;
    }
}

export default AuthUser;