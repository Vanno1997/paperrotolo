import { Component, OnInit } from '@angular/core';
import { ActioneventDTO } from '../../../../dto/ActioneventDTO';
import { LabelDTO } from '../../../../dto/LabelDTO';
import { ActionEventService } from '../../../../app/services/action-event.service';
import { Router } from '@angular/router';
import { ParamDTO } from '../../../../dto/ParamDTO';

@Component({
  selector: 'app-action-event-list',
  templateUrl: './action-event-list.component.html',
  styleUrls: ['./action-event-list.component.css']
})
export class ActionEventListComponent implements OnInit {
  private actionEventList: Array<ActioneventDTO>;
  private actioneventDTO: ActioneventDTO;
  private labelDTO: LabelDTO;
  private jwt: string;
  private paramDTO: ParamDTO;

  constructor(private actionEventService: ActionEventService, private router: Router) { }

  ngOnInit() {
    this.jwt = sessionStorage.getItem("jwt");
    this.paramDTO = new ParamDTO(this.jwt, this.actioneventDTO);
    this.actionEventService.showActionEvent(this.paramDTO).subscribe((data: any) => {
      if(data != null){
        this.actionEventList = data;
        var RetriData= sessionStorage.getItem("ActionList");
        this.actionEventList = JSON.parse(RetriData)
    }}
    )
  
  }
  
  chooseActionEvent(idActionEvent: number){
    sessionStorage.setItem("idActionEvent", JSON.stringify(idActionEvent));
    this.router.navigate(["/homeBo/updateActionEvent"]);
  }

  setDTO(actionEvent: ActioneventDTO){
    sessionStorage.setItem("DTOpassato", JSON.stringify(actionEvent));
    this.router.navigate(["/homeBo/updateActionEvent"]);
  }

  deleteActionEvent(actionEventDTO: ActioneventDTO){
    this.actionEventService.deleteActionEvent(this.paramDTO).subscribe((data: any) =>{
      if(data){
        alert("Cancellazione effettuata");
        location.reload(true);
      }
      else
        alert("Cancellazione fallita");
      this.router.navigate(["homeBo"]);
    })
  }

}
