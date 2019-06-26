import { Component, OnInit } from '@angular/core';
import { ActioneventDTO } from '../../../../dto/ActioneventDTO';
import { Router } from '@angular/router';
import { ActionEventService } from '../../../../app/services/action-event.service';
import { LabelDTO } from '../../../../dto/LabelDTO';
import { LabelService } from '../../../../app/services/label.service';
import { ParamDTO } from '../../../../dto/ParamDTO';

@Component({
  selector: 'app-action-event-show',
  templateUrl: './action-event-show.component.html',
  styleUrls: ['./action-event-show.component.css']
})
export class ActionEventShowComponent implements OnInit {
  private actionEventList: Array<ActioneventDTO>;
  private labelList: Array<LabelDTO>;
  private actioneventDTO: ActioneventDTO;
  private labelDTO: LabelDTO;
  private paramDTO: ParamDTO;
  private jwt: string;

  constructor(private router: Router,  private actionEventService: ActionEventService, private labelService: LabelService) { }

  ngOnInit() {
    this.jwt = sessionStorage.getItem("jwt");
    this.actionEventList = JSON.parse(sessionStorage.getItem("ActionList"));
    //this.actionEventList = JSON.parse("ActionList", JSON.stringify(this.actionList));
  }
}