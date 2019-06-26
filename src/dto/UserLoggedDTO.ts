export class UserLoggedDTO{
    jwt: string;
    type: number;

    constructor(jwt: string, type:number){
        this.jwt = jwt;
        this.type = type;
    }
}