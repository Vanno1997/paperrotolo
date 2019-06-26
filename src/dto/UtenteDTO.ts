export class UtenteDTO{
    id: number;
    username: string;
    password: string;
    type: number;
    authorities: Array<string>;


    constructor(id: number, username: string, password: string, type: number, authorities: Array<string>){
        this.id = id;
        this.username = username;
        this.password = password;
        this.type = type;
        this.authorities = authorities;

    }
}
