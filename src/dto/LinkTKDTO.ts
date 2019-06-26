import { ThingDTO } from '../dto/ThingDTO';
import { KeywordDTO } from '../dto/KeywordDTO';

export class LinkTKDTO {
    idLinkTK: number;
    thing: ThingDTO;
    keyword: KeywordDTO;
    
    constructor(id:number, thing: ThingDTO, keyword: KeywordDTO){
        this.idLinkTK = id;
        this.thing = thing;
        this.keyword = keyword;
    }
}