import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LinkTKDTO } from '../../dto/LinkTkDTO';
import { KeywordDTO } from '../../dto/KeywordDTO';
import { ParamDTO } from '../../dto/ParamDTO';


@Injectable({
  providedIn: 'root'
})
export class LinkTKService {
    private linkTKList: Array<LinkTKDTO>;

    constructor(private http: HttpClient) { }

    insertLinkTK(paramDTO: ParamDTO){
      return this.http.post('http://localhost:8080/LinkTK/insertLinkTK', paramDTO);
    }

    updateLinkTK(linkTKDTO: LinkTKDTO){
      console.log(linkTKDTO);
      return this.http.put('http://localhost:8080/LinkTK/updateLinkTK', linkTKDTO);
    }

    /*
    showThingOfKey(keywordDTO: KeywordDTO){
      return this.http.get('http://localhost:8080/Keyword/showThingOfKey?id='+ keywordDTO.idKeyword);
    }*/

    findLinkTKByKeyword(paramDTO: ParamDTO){
      return this.http.post('http://localhost:8080/LinkTK/findLinkTKByKeyword', paramDTO);
    }

    showLinkTK(paramDTO: ParamDTO){
      return this.http.get('http://localhost:8080/LinkTK/showLinkTK?jwt='+ paramDTO.jwt);
    }

    deleteLinkTK(linkTKDTO: LinkTKDTO){
      console.log(linkTKDTO.idLinkTK);
      return this.http.delete('http://localhost:8080/LinkTK/deleteLinkTK?id='+ linkTKDTO.idLinkTK);
    }
}
