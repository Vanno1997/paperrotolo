import { Component, OnInit } from '@angular/core';
import { UtenteDTO } from '../../../../dto/UtenteDTO';
import { Router } from '@angular/router';
import { UtenteService } from '../../../services/utente.service';
import { ParamDTO } from '../../../../dto/ParamDTO';


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  public utenteDTO: UtenteDTO;
  private paramDTO: ParamDTO;

  constructor(private router: Router, private utenteService: UtenteService) { }

  ngOnInit() {
    //this.findUser();
    this.utenteDTO = new UtenteDTO(parseInt(sessionStorage.getItem("id")),"","",0, []);
  }

  updateUtente(){
    console.log(this.utenteDTO);

    this.utenteService.updateUtente(this.paramDTO).subscribe((data: any) => {

      if(data != null)
        alert("Aggiornamento effettuato");
      else
        alert("Aggiornamento fallito");

        this.router.navigateByUrl("homeAdmin");
    })
  }
}
