import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { UtenteDTO } from '../../dto/UtenteDTO';
import { LoginDTO } from '../../../src/dto/LoginDTO';
import {  GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from 'angularx-social-login';
import { UserLoggedDTO } from '../../dto/UserLoggedDTO';

@Injectable({
  providedIn: 'root'
  
})
export class LoginService {
  private wrkUser : LoginDTO;
  constructor(private http: HttpClient) {
    this.wrkUser = new LoginDTO("","");
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(result);
      console.error(error);
      console.log('${operation} failed: ${error.message}');
      return of(result as T);
    };
  }

  auth() {
    var user = JSON.parse(localStorage.getItem("currentUser")) as UtenteDTO;
    
    console.log(user);
    if(user) {
        return "Bearer " + user.authorities;
    } else {
        return "";
    }
  }

  login(logindto: LoginDTO){
    console.log("wwww")
    return this.http.post('http://localhost:8080/api/authenticate', logindto);
    
  }

  getUserLogged(username: string){
    console.log("qua: ", this.auth())
    console.log(this.auth());
    return this.http.get('http://localhost:8080/api/users/'+username, {
      headers: {
          "Authorization": this.auth()
      }
    });
  }

  googleLogin(socialUser : SocialUser) : Observable<UtenteDTO> {

    this.wrkUser.username = socialUser.name;
    this.wrkUser.password = socialUser.email;
    return this.http.post<UtenteDTO>('//localhost:8080/User/loginGoogle',this.wrkUser).pipe(tap((response)=>
    console.log(socialUser.name),catchError(this.handleError("login error2",{}))));
  }
}
