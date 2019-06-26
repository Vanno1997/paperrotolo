import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../../../src/app/services/login.service';
import { NgForm } from '@angular/forms';
import { LoginDTO } from '../../../../../src/dto/LoginDTO';
import { AuthService } from "angularx-social-login";
import {  GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from 'angularx-social-login';
import { UtenteDTO } from '../../../../dto/UtenteDTO';
import { UtenteService } from '../../../services/utente.service';
import { UserLoggedDTO } from '../../../../dto/UserLoggedDTO';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private idUtenteLocale: number;
  public loginDTO: LoginDTO;
  public utenteDTO: UtenteDTO;
  public user: SocialUser;
  private jwt: string;
  private userLoggedDTO: UserLoggedDTO;
  private username: string;
  private password: string;
  private rememberMe: boolean;


  constructor(private loginService: LoginService, private router:  Router ,
    private authService: AuthService, private utenteService: UtenteService, private http: HttpClient) { }

  ngOnInit(){
    this.loginDTO = new LoginDTO(null,null);

    this.utenteDTO = new UtenteDTO(0,null,null,0, []);
    /*this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user.name);
    });*/

  }

  signInWithGoogle(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user.name);
      if (user != null){
        console.log(user.name);
        sessionStorage.setItem("googleUser",JSON.stringify(user)); //controllare cosa fa questo metodo
        //doppio login in quanto una volta effettuato il login con google e quindi aver recurperato i dati di accesso
        //eseguo una seconda verifica sul db in cui devo a sua volta decidere se registrare o accedere
        // questo a seconda del fatto che l'account esista o meno
        this.loginService.googleLogin(this.user).subscribe((responseDb:any) => {

          if (responseDb.type == 1) {
              this.router.navigateByUrl("/homeBo");
            } else if (responseDb.type == 0){
              this.router.navigateByUrl("/homeAdmin");
            }
          }
        );
      }
    });
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log('eccolo');
  }

  login(): void{
    this.loginService.login(this.loginDTO).subscribe((response: any) => {
      console.log(JSON.stringify(response));
      localStorage.setItem("currentUser", JSON.stringify({ "authorities": response.id_token }));

      console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    });

    this.loginService.getUserLogged(this.loginDTO.username).subscribe((response: UtenteDTO) => {
      console.log(response);
      localStorage.setItem("currentUserData", JSON.stringify(response));

     
        this.router.navigateByUrl("homeBo");
    
     
    })

  }

}
    
    





    //console.log(this.loginDTO);
    /*  this.loginService.login(this.loginDTO).subscribe((response: any) => {

    if(response != null){
        
      localStorage.setItem("currentUser", JSON.stringify({ "utentes": response}));
        //localStorage.setItem("jwt",response.jwt);

      if(response.type == 1){
        this.router.navigate(["/homeBo"]);
      }
      else if(response.type == 0)
        this.router.navigate(["/homeAdmin"]);

    }
    else{
      alert("username o password errati");
      }
    });*/

