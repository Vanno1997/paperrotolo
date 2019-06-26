import { Component, OnInit } from '@angular/core';
import { LabelDTO } from '../../../../dto/LabelDTO';
import { UtenteDTO } from '../../../../dto/UtenteDTO';
import { LabelService } from '../../../../app/services/label.service';
import { Router } from '@angular/router';
import { UtenteService } from '../../../services/utente.service';
import { ParamDTO } from '../../../../dto/ParamDTO';
import { ActionEventService } from '../../../../app/services/action-event.service';
import { ActioneventDTO } from '../../../../dto/ActioneventDTO';


@Component({
  selector: 'app-label-list',
  templateUrl: './label-list.component.html',
  styleUrls: ['./label-list.component.css']
})
export class LabelListComponent implements OnInit {
  private labelList: Array<LabelDTO>;
  private actionList: Array<ActioneventDTO>;
  private labelDTO: LabelDTO;
  private paramDTO: ParamDTO;
  private paramdeleteDTO: ParamDTO;
  private jwt: string;
  private jwtdelete: string;
  //private labelDeleteDTO: LabelDTO;


  constructor(private labelService: LabelService, private router: Router, private actionEventService: ActionEventService) { }

  ngOnInit() {
    this.jwt = sessionStorage.getItem("jwt");
    console.log("in ngOnit arriva: " + this.jwt);
    this.paramDTO = new ParamDTO(this.jwt, this.labelDTO);
    this.labelService.showLabel(this.paramDTO).subscribe((data: Array<LabelDTO>) =>{
      if(data != null){
        console.log(data);
        this.labelList = data;
       
      }
    })
  }

  chooseLabel(idLabel: number){
    sessionStorage.setItem("idLabel", JSON.stringify(idLabel));
    this.router.navigate(["/homeBo/updateLabel"]);
  }

  setLabel(labelDTO: LabelDTO){
    alert("labelDTO" + labelDTO.name);
    sessionStorage.setItem("LabelDTOpassato", JSON.stringify(labelDTO));
    this.router.navigate(["homeBo/updateLabel"]);
  }

  findAction(labelDTO: LabelDTO){
    this.labelDTO = labelDTO; //?
    this.jwt = sessionStorage.getItem("jwt");
    //sessionStorage.setItem("LabelDTOpassato", JSON.stringify(labelDTO));
    this.paramDTO = new ParamDTO(this.jwt, this.labelDTO);
    this.actionEventService.findAction(this.paramDTO).subscribe((data: Array<ActioneventDTO>) =>{
      if(data){
        this.actionList = data;
        sessionStorage.setItem("ActionList", JSON.stringify(this.actionList));
        this.router.navigate(["homeBo/showActionEvent"]);
      }
      else
      this.router.navigate(["homeBO"]);
    })
  }

  findEvent(labelDTO: LabelDTO){
    this.labelDTO = labelDTO; //?
    this.jwt = sessionStorage.getItem("jwt");
    //sessionStorage.setItem("LabelDTOpassato", JSON.stringify(labelDTO));
    this.paramDTO = new ParamDTO(this.jwt, this.labelDTO);
    this.actionEventService.findEvent(this.paramDTO).subscribe((data: Array<ActioneventDTO>) =>{
      if(data){
        this.actionList = data;
        sessionStorage.setItem("ActionList", JSON.stringify(this.actionList));
        this.router.navigate(["homeBo/showActionEvent"]);
      }
      else
      this.router.navigate(["homeBO"]);
    })
  }
  deleteLabel(labelDTO: LabelDTO){
    this.labelDTO = labelDTO; //?
    alert("label DTO " + this.labelDTO.idLabel);
    this.jwtdelete = sessionStorage.getItem("jwt");
    this.paramdeleteDTO = new ParamDTO(this.jwtdelete, this.labelDTO);
    //console.log("paramDTO in deleteLabel", this.paramdeleteDTO)

    this.labelService.deleteLabel(this.paramdeleteDTO).subscribe((data: any) =>{

      if(data){
        alert("Cancellazione effettuata");
        location.reload(true);
      }
        
      else
        alert("Cancellazione fallita");

      this.router.navigate(["homeBO"]);
    })
  }

}
