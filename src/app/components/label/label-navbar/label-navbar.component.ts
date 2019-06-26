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
  selector: 'app-label-navbar',
  templateUrl: './label-navbar.component.html',
  styleUrls: ['./label-navbar.component.css']
})
export class LabelNavbarComponent implements OnInit {
  private labelList: Array<LabelDTO>;
  private actionList: Array<ActioneventDTO>;
  private labelDTO: LabelDTO;
  private paramDTO: ParamDTO;
  private paramdeleteDTO: ParamDTO;
  private jwt: string;

  constructor(private labelService: LabelService, private router: Router, private actionEventService: ActionEventService) { }

  ngOnInit() {
    this.labelList = JSON.parse(sessionStorage.getItem("labelNavbar")) as Array<LabelDTO>;
    //var RetriData = sessionStorage.getItem("labelNavbar");
    //this.labelList = JSON.parse(RetriData) as Array<LabelDTO>;
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


}