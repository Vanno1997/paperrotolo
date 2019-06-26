import { ThingDTO } from './ThingDTO';

export class HardwareDTO{
    idHardware: number;
    name: String;
    description: String;
    master: boolean;
    thing: ThingDTO;


constructor(id: number, name: String, description: String, master: boolean, thingDTO: ThingDTO ){
    this.idHardware=id;
    this.name= name;
    this.description=description;
    this.master= master;
    this.thing = thingDTO;
}
}