import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtenteDTO } from '../../dto/UtenteDTO';
import { ConstantPool } from '@angular/compiler';
import { ParamDTO } from '../../dto/ParamDTO';


@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  constructor(private http: HttpClient) { }

  findUtente(id: string){
    return this.http.get('http://localhost:8094/User/findById?id='+id);
  }


  insertUtente(paramDTO: ParamDTO){
    console.log(paramDTO)
    return this.http.post('http://localhost:8094/User/insertUser', paramDTO);
  }

  showUtente(paramDTO: ParamDTO){
    return this.http.get('http://localhost:8094/User/showUser?jwt=' + paramDTO.jwt);
  }

  deleteUtente(paramDTO: ParamDTO){
    console.log(paramDTO);
    return this.http.post('http://localhost:8094/User/deleteUser', paramDTO);
  }

  updateUtente(paramDTO: ParamDTO) {
    return this.http.put( 'http://localhost:8094/User/updateUser', paramDTO);
  }

}
