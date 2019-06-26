import { Component, OnInit } from '@angular/core';
import { UtenteDTO } from '../../../../dto/UtenteDTO';
import { UtenteService } from '../../../services/utente.service';
import { Router } from '@angular/router';
import { ParamDTO } from '../../../../dto/ParamDTO';
import { UserLoggedDTO } from '../../../../dto/UserLoggedDTO';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {
  private utenteList: Array<UtenteDTO>;
  private utenteDTO: UtenteDTO;
  private paramDTO: ParamDTO;
  private jwt: string;

  constructor(private utenteService: UtenteService, private router: Router) { }

  ngOnInit() {
    //alert("prima di prelevare: " + this.jwt);
    this.jwt = sessionStorage.getItem("jwt");
    //alert("nel show: " + this.jwt);
    this.paramDTO = new ParamDTO(this.jwt, this.utenteDTO);
    //alert("paramDTO nel show: " + this.paramDTO);

    this.utenteService.showUtente(this.paramDTO).subscribe((data: Array<UtenteDTO>) =>{
      //alert(" param " + this.paramDTO);
      console.log("user: ",data)
     //alert("nel show: " + this.jwt);
     // alert(" jwy " + this.jwt);
      if(data != null){
        this.utenteList = data;
      }
    })
  }

  chooseUtente(id: number){
    sessionStorage.setItem("id", JSON.stringify(id));
    this.router.navigateByUrl("/updateUser");
  } 
  deleteUtente(utenteDTO: UtenteDTO){
    alert("param:" + this.jwt);

    this.utenteService.deleteUtente(this.paramDTO).subscribe((data: any) =>{
      //alert("param:" + this.jwt);

      if(data){
        alert("Cancellazione effettuata");
        location.reload(true);
      }
        
      else
        alert("Cancellazione fallita");

      this.router.navigateByUrl("homeAdmin");
    })
  }

}
