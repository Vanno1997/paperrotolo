import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LabelDTO } from '../../../src/dto/LabelDTO';
import { ParamDTO } from '../../dto/ParamDTO';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor(private http: HttpClient) { }
  
  //qui andra paramDTO
  insertLabel(paramDTO: ParamDTO){
   return this.http.post('http://localhost:8080/Label/insertLabel', paramDTO);
  }

  //qui andrà l'oggetto paramDTO.. sempre con la post
  showLabel(paramDTO: ParamDTO){
    console.log("qua arriva: " + paramDTO.jwt);
    return this.http.get('http://localhost:8080/Label/showLabel?jwt=' + paramDTO.jwt);
  }

  showLabelBYName(paramDTO: ParamDTO){
    console.log("paramDTO " , paramDTO);
    return this.http.post('http://localhost:8080/Label/showLabelNavbar', paramDTO);
  }

  //anche qui andrà l'oggetto.. si utilizzerà POST
  deleteLabel(paramDTO: ParamDTO){
    console.log("nella deleteService: " , paramDTO);
    return this.http.post('http://localhost:8080/Label/deleteLabel', paramDTO);
  }
  
  updateLabel(paramDTO: ParamDTO) {
    console.log(paramDTO);
    return this.http.put('http://localhost:8080/Label/updateLabel', paramDTO);
  }

  

}
