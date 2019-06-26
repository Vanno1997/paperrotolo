import { UtenteDTO } from './UtenteDTO';

export class LabelDTO{
    idLabel: number;
    name: String;
    idUser: number;

    constructor(id: number, name: String, idUser: number){
        this.idLabel=id;
        this.name=name;
        this.idUser=idUser;
    }
}