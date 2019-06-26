import { ThingDTO } from './ThingDTO';

export class BehaviorDTO {
    idBehavior: number;
    name: String;
    thingDTO: ThingDTO;


constructor(id: number, name: String, idThing: number){
    this.idBehavior = id;
    this.name = name;
    idThing = this.thingDTO.id;
}
}