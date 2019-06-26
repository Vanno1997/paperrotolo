import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CodeService {
    constructor (private http: HttpClient){}

    showCode(){
        return this.http.get('http://localhost:8080/Code/showCode');
    }

}