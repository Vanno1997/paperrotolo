import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThingDTO } from '../../dto/ThingDTO';
import { ParamDTO } from '../../dto/ParamDTO';
import { Observable } from 'rxjs';
import { UtenteDTO } from '../../dto/UtenteDTO';

@Injectable({
  providedIn: 'root'
})
export class ThingService {

  constructor(private http: HttpClient) { }
  auth() {
    var user = JSON.parse(localStorage.getItem("currentUser")) as UtenteDTO;
    if(user) {
        return "Bearer " + user.authorities;
    } else {
        return "";
    }
  }

  insertThing(paramDTO: ParamDTO){
    console.log("alla insert arriva",paramDTO);
    return this.http.post('http://localhost:8080/Thing/insertThing', paramDTO);
  }

  updateThing(paramDTO: ParamDTO){
    console.log(paramDTO);
    return this.http.put('http://localhost:8080/Thing/updateThing', paramDTO);
  }

  showThing(): Observable<Array<ThingDTO>>{
    return this.http.get<Array<ThingDTO>>('http://localhost:8080/ThingMJ/api/things', {
      headers: {
          "Authorization": this.auth()
      }
    });
  }

  findOne(id: String): Observable<ThingDTO>{
    return this.http.get<ThingDTO>('http://localhost:8080/ThingMJ/api/findOne/'+id, {
      headers: {
          "Authorization": this.auth()
      }
    });
  }

  deleteThing(thingDTO: ThingDTO){
    console.log(thingDTO);
    return this.http.delete('http://localhost:8080/Thing/deleteThing?id='+thingDTO.id);
  }

  
  
}
