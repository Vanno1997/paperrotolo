import { Component, OnInit } from '@angular/core';
import { LabelDTO } from '../../../../dto/LabelDTO';
import { Router } from '@angular/router';
import { LabelService } from '../../../../app/services/label.service';
import { ParamDTO } from '../../../../dto/ParamDTO';


@Component({
  selector: 'app-label-insert',
  templateUrl: './label-insert.component.html',
  styleUrls: ['./label-insert.component.css']
})
export class LabelInsertComponent implements OnInit {
  private labelDTO: LabelDTO = new LabelDTO(0,'',0);
  private paramDTO: ParamDTO;
  private jwt: string;

  constructor(private router: Router, private labelService: LabelService) { }

  ngOnInit() {
    //this.user = new UserDTO(0,"","",0);
    //this.labelDTO = new LabelDTO(0,"",this.user);
  }

  insertLabel(){
    //this.thingDTO.user = JSON.parse(sessionStorage.getItem("User")) as UserDTO;
    //this.labelDTO.user.idUser = parseInt(sessionStorage.getItem("idUser")); 
   this.paramDTO = new ParamDTO(sessionStorage.getItem("jwt"), this.labelDTO);
  this.labelService.insertLabel(this.paramDTO).subscribe((data: any) => {
    
    if(data != null)
      alert("Inserimento effettuato");
    else
      alert("Inserimento fallito");

      this.router.navigateByUrl("/homeBo");
  })
}

}
