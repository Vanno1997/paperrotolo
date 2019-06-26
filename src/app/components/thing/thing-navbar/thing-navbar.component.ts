import { Component, OnInit } from '@angular/core';

import { LabelDTO } from '../../../../dto/LabelDTO';
import { UtenteDTO } from '../../../../dto/UtenteDTO';
import { LabelService } from '../../../../app/services/label.service';
import { Router } from '@angular/router';
import { UtenteService } from '../../../services/utente.service';
import { ParamDTO } from '../../../../dto/ParamDTO';
import { ActionEventService } from '../../../../app/services/action-event.service';
import { ActioneventDTO } from '../../../../dto/ActioneventDTO';
import { ThingDTO } from '../../../../dto/ThingDTO';


@Component({
  selector: 'app-thing-navbar',
  templateUrl: './thing-navbar.component.html',
  styleUrls: ['./thing-navbar.component.css']
})
export class ThingNavbarComponent implements OnInit {
  private listThing: Array<ThingDTO>;

  constructor(private labelService: LabelService, private router: Router, private actionEventService: ActionEventService) { }

  ngOnInit() {
    this.listThing = JSON.parse(sessionStorage.getItem("ThingByName")) as Array<ThingDTO>;

  }

}
