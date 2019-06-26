import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KeywordDTO } from '../../dto/KeywordDTO';
import { ParamDTO } from '../../dto/ParamDTO';

@Injectable({
  providedIn: 'root'
})
export class KeywordService {
    private keywordList: Array<KeywordDTO>;
  
    constructor(private http: HttpClient) { }

  showKeyword(paramDTO: ParamDTO){
    return this.http.get('http://localhost:8080/Keyword/showKeywords?jwt='+ paramDTO.jwt);
  }

  insertKeyword(paramDTO: ParamDTO){
    return this.http.post('http://localhost:8080/Keyword/insertKeyword', paramDTO);
  }
  
  deleteKeyword(paramDTO: ParamDTO){
    return this.http.post('http://localhost:8080/Keyword/deleteKeyword', paramDTO);
  }

  updateKeyword(keywordDTO: KeywordDTO){
    console.log(keywordDTO);
    return this.http.put('http://localhost:8080/Keyword/updateKeyword', keywordDTO);
  }
}