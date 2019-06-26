export class LoginDTO{
    username: string;
    password: string;
 

    constructor( username: string, password: string){
    
        this.password = password;
        this.username = username;
    }
}