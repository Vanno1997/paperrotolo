import { BehaviorDTO } from './BehaviorDTO';

export class CodeDTO{
    idCode: number;
    name: String;
    body: String;
    type: String;
    behaviorDTO: BehaviorDTO;

constructor(id: number, name: String, body: String, type: String, idBehavior: number){
    this.idCode = id;
    this.name = name;
    this.body = body;
    this.type = type;
    idBehavior = this.behaviorDTO.idBehavior;
}
}