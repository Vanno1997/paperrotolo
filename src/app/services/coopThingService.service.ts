import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CoopThingService {

  constructor(private http: HttpClient) { }

  showCoop(){
    return this.http.get('http://localhost:8080/Coop/showCoop');
  }

}
