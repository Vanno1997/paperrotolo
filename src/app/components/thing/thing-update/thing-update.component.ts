import { Component, OnInit, Input } from '@angular/core';
import { ThingDTO } from '../../../../dto/ThingDTO';
import { LabelDTO } from '../../../../dto/LabelDTO';
import { UtenteDTO } from '../../../../dto/UtenteDTO';
import { ThingService } from '../../../../../src/app/services/thing.service';
import {LabelService} from '../../../../../src/app/services/label.service';
import { Router } from '@angular/router';
import { ParamDTO } from '../../../../dto/ParamDTO';

@Component({
  selector: 'app-thing-update',
  templateUrl: './thing-update.component.html',
  styleUrls: ['./thing-update.component.css']
})
export class ThingUpdateComponent implements OnInit {
  private thingDTO: ThingDTO;
  private labelDTO: LabelDTO;
  private utenteDTO: UtenteDTO;
  private labelList: Array<LabelDTO>;
  private paramDTO: ParamDTO;
  private jwt:string;
  
  constructor(private thingService: ThingService, private router: Router, private labelService: LabelService) { }


  ngOnInit() {
    //this.userDTO = new UserDTO(0,"","",0); 
    //this.thingDTO = new ThingDTO(parseInt(sessionStorage.getItem("idThing")),"","","","","","", this.userDTO, this.labelDTO);

    this.labelDTO = new LabelDTO(0,"",0);
    this.thingDTO = JSON.parse(sessionStorage.getItem("DTOpassato")) as ThingDTO;
    this.jwt = sessionStorage.getItem("jwt");
    this.paramDTO = new ParamDTO(this.jwt, this.thingDTO);
   
    this.labelService.showLabel(this.paramDTO).subscribe((data: any) =>{
      if(data != null){
        console.log(data);
        this.labelList = data;
      }
    })
  }

  updateThing(){
    this.paramDTO = new ParamDTO(sessionStorage.getItem("jwt"), this.thingDTO);
  //this.thingDTO.idUser = parseInt(sessionStorage.getItem("idUser"));
  console.log("updateComponent: ", this.paramDTO);
  this.thingService.updateThing(this.paramDTO).subscribe((data: any) => {
    
    if(data != null)
      alert("Inserimento effettuato");
    else
      alert("Inserimento fallito");
      this.router.navigateByUrl("/homeBo");
  })
}
}