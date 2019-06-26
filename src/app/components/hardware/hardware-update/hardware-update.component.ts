import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HardwareDTO } from '../../../../../src/dto/HardwareDTO';
import { ThingDTO } from '../../../../../src/dto/ThingDTO';
import { NgForm } from '@angular/forms';
import { HardwareService } from '../../../../../src/app/services/hardware.service';
import { ThingService } from '../../../../../src/app/services/thing.service';
import { KeywordDTO } from '../../../../dto/KeywordDTO';
import { UtenteDTO } from '../../../../dto/UtenteDTO';
import { LabelDTO } from '../../../../dto/LabelDTO';
import { LinkTKDTO } from '../../../../dto/LinkTKDTO';
import { ParamDTO } from '../../../../dto/ParamDTO';

@Component({
  selector: 'app-hardware-update',
  templateUrl: './hardware-update.component.html',
  styleUrls: ['./hardware-update.component.css']
})
export class HardwareUpdateComponent implements OnInit {
  private hardwareDTO: HardwareDTO;
  private thingDTO: ThingDTO;
  private keywordDTO: KeywordDTO;
  private utenteDTO: UtenteDTO;
  private labelDTO: LabelDTO;
  private linkTKDTO: LinkTKDTO;
  private thingList: Array<ThingDTO>;
  private paramDTO: ParamDTO;

  constructor(private hardwareService: HardwareService, private router: Router, private thingService: ThingService) { }

  ngOnInit() {
    
    this.labelDTO = new LabelDTO(0,"",0);
    this.utenteDTO = new UtenteDTO(0,"","",0, []);
    this.thingDTO = new ThingDTO(0,"","",[],[]);
    //this.hardwareDTO = new HardwareDTO(0,"","",false,this.thingDTO);*/
    this.hardwareDTO = JSON.parse(sessionStorage.getItem("DTOpassato")) as HardwareDTO;

    this.thingService.showThing().subscribe((data: any) =>{
      if(data != null){
        console.log(data);
        this.thingList = data;
      }
    })
  }

  aggiornaHardware(){
    //this.hardwareDTO = JSON.parse(sessionStorage.getItem("DTOpassato")) as HardwareDTO;   
    
    this.hardwareService.updateHardware(this.hardwareDTO).subscribe((data: any) => {
      if(data != null)
        alert("Inserimento effettuato");
      else
        alert("Collegamento già esistente");
      this.router.navigateByUrl("/listHardware");
    })
  }

}
