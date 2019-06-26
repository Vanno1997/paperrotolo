import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../../../services/utente.service';
import { UtenteDTO } from '../../../../dto/UtenteDTO';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ParamDTO } from '../../../../dto/ParamDTO';

@Component({
  selector: 'app-user-insert',
  templateUrl: './user-insert.component.html',
  styleUrls: ['./user-insert.component.css']
})
export class UserInsertComponent implements OnInit {

  private utenteDTO: UtenteDTO;
  private paramDTO: ParamDTO;
  private jwt: string;

  constructor(private utenteService: UtenteService, private router: Router) { }

  ngOnInit() {
    console.log(this.jwt);
    
    this.utenteDTO = new UtenteDTO(0,"","",0,[]);
  }

    insertUtente(){
      this.jwt= sessionStorage.getItem("jwt");
      this.paramDTO = new ParamDTO(this.jwt, this.utenteDTO);
      console.log("user: ",this.utenteDTO);
      this.utenteService.insertUtente(this.paramDTO).subscribe((data: any) => {
      console.log("arr")

      if(data != null)
        alert("Inserimento effettuato");
      else
        alert("Inserimento fallito");

        this.router.navigateByUrl("/homeAdmin");
    })
  }
}
