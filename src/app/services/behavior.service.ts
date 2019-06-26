import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class BehaviorService {
    constructor (private http: HttpClient){}

    showBehavior(){
        return this.http.get('http://localhost:8080/Behavior/showBehavior');
    }

}