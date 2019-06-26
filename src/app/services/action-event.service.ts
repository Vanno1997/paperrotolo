import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParamDTO } from '../../dto/ParamDTO';
import { LabelDTO } from '../../dto/LabelDTO';

@Injectable({
  providedIn: 'root'
})
export class ActionEventService {

  constructor(private http: HttpClient) { }
    insertActionEvent(paramDTO: ParamDTO){
      console.log("il paramDTO: ", paramDTO);
      return this.http.post('http://localhost:8080/ActionEvent/insertActionEvent', paramDTO);
    }

    updateActionEvent(paramDTO: ParamDTO){

      return this.http.put('http://localhost:8080/ActionEvent/updateActionEvent', paramDTO);
    }

    showActionEvent(paramDTO: ParamDTO){
      return this.http.get('http://localhost:8080/ActionEvent/showActionEvent?jwt='+ paramDTO.jwt);
    }

    deleteActionEvent(paramDTO: ParamDTO){

      return this.http.post('http://localhost:8080/ActionEvent/deleteActionEvent', paramDTO);
    }

    findAction(paramDTO: ParamDTO){
      console.log("in findAction il param", paramDTO )
      return this.http.post('http://localhost:8080/ActionEvent/findAction', paramDTO);
    }

    findEvent(paramDTO: ParamDTO){
      return this.http.post('http://localhost:8080/ActionEvent/findEvent', paramDTO);
    }

    aeByLabel(labels:Array<LabelDTO>){
      console.log(labels);
      return this.http.post('http://localhost:8080/ActionEvent/getByLabel', labels);
    }

    findActionByName(paramDTO: ParamDTO){
      console.log("arriva", paramDTO);
      return this.http.post('http://localhost:8080/ActionEvent/findActionByName', paramDTO);
    }

}
