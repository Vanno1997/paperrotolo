import { Component, OnInit } from '@angular/core';
import { HardwareDTO } from '../../../../../src/dto/HardwareDTO';
import { Router } from '@angular/router';
import { HardwareService } from '../../../../../src/app/services/hardware.service';
import { ParamDTO } from '../../../../dto/ParamDTO';

@Component({
  selector: 'app-hardware-list',
  templateUrl: './hardware-list.component.html',
  styleUrls: ['./hardware-list.component.css']
})
export class HardwareListComponent implements OnInit {
  private hardwareList: Array<HardwareDTO>;
  private hardwareDTO: HardwareDTO;
  private jwt: string;
  private paramDTO: ParamDTO;

  constructor(private hardwareService: HardwareService, private router: Router) { }

  ngOnInit() {
    this.jwt = sessionStorage.getItem("jwt");
    this.paramDTO = new ParamDTO(this.jwt, this.hardwareDTO);
    this.hardwareService.showHardware(this.paramDTO).subscribe((data: any) =>{
      if(data != null){
        console.log(data)
        this.hardwareList = data;
      }
    })
  }

  chooseHW(hardwareDTO: HardwareDTO){
    sessionStorage.setItem("DTOpassato", JSON.stringify(hardwareDTO));
    this.router.navigate(["/homeBo/updateHardware"]);
  }

  deleteHardware(paramDTO: ParamDTO){
    this.jwt = sessionStorage.getItem("jwt");
    this.paramDTO = new ParamDTO(this.jwt, this.hardwareDTO);
    this.hardwareService.deleteHardware(this.paramDTO).subscribe((data: any) =>{
      if(data)
        alert("Cancellazione effettuata");
      else
        alert("Cancellazione fallita");

      this.router.navigate(["/homeBo/listHardware"]);
    })
  }
}