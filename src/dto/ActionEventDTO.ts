import { LabelDTO } from './LabelDTO';

export class ActioneventDTO{
    id: number;
    name: String;
    description: String;
    type: number;
 

    constructor(id: number,  description: String, name: String, type:number){
        this.id = id;
        this.description= description;
        this.name= name;

        this.type= type;

    }
    
}