import { Component, OnInit } from '@angular/core';
import { HardwareDTO } from '../../../../../src/dto/HardwareDTO';
import { ThingDTO } from '../../../../../src/dto/ThingDTO';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { HardwareService } from '../../../../../src/app/services/hardware.service';
import {ThingService } from '../../../../../src/app/services/thing.service';
import { LabelDTO } from '../../../../dto/LabelDTO';
import { UtenteDTO } from '../../../../dto/UtenteDTO';
import { ParamDTO } from '../../../../dto/ParamDTO';

@Component({
  selector: 'app-hardware-insert',
  templateUrl: './hardware-insert.component.html',
  styleUrls: ['./hardware-insert.component.css']
})
export class HardwareInsertComponent implements OnInit {
  public hardwareDTO: HardwareDTO;
  public thingDTO: ThingDTO;
  private labelDTO: LabelDTO;
  private thingList: Array<ThingDTO>
  private paramDTO: ParamDTO;
  private jwt:string;

  constructor(private hardwareService : HardwareService, private router: Router, private thingService: ThingService) { }

  ngOnInit() {
    this.labelDTO = new LabelDTO(0,"",0);
    this.thingDTO = new ThingDTO(0,"","",[],[]);

    this.jwt = sessionStorage.getItem("jwt");
    this.hardwareDTO = new HardwareDTO(0,"","", false,this.thingDTO);
    this.paramDTO = new ParamDTO(this.jwt, this.hardwareDTO);
    this.thingService.showThing().subscribe((data: any) =>{
      if(data != null){
        console.log(data);
        this.thingList = data;
      }
    })
  }

    insertHardware(){
    this.jwt = sessionStorage.getItem("jwt");
    this.paramDTO = new ParamDTO(this.jwt, this.hardwareDTO);
    this.hardwareService.insertHardware(this.paramDTO).subscribe((data: any) => {
      if(data != null)
        alert("Inserimento effettuato");
      else
        alert("Inserimento fallito");
        this.router.navigate(["/homeBo"]);
    })
  }
}