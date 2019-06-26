import { Component, OnInit } from '@angular/core';
import { ThingDTO } from '../../../../dto/ThingDTO';
import { ThingService } from '../../../services/thing.service';
import { Router } from '@angular/router';
import { ParamDTO } from '../../../../dto/ParamDTO';
import { UtenteDTO } from '../../../../dto/UtenteDTO';
import { UtenteService } from '../../../services/utente.service';
@Component({
  selector: 'app-menu-bo',
  templateUrl: './menu-bo.component.html',
  styleUrls: ['./menu-bo.component.css']
})

export class MenuBoComponent implements OnInit {
  private thingList: Array<ThingDTO>;
  private thingDTO: ThingDTO;
  private jwt: string;
  private paramDTO: ParamDTO;
  private userLog: UtenteDTO;

  constructor(private thingService: ThingService, private router: Router ,private utenteService : UtenteService) { }

  ngOnInit() {
    
    //this.userService.findUser(this.jwt).subscribe((data: any)=>{
    //  if(data !=null){
    //    this.userLog = data;
    //  }
    //});
    
    this.thingService.showThing().subscribe((data: Array<ThingDTO>) =>{
      if(data != null){
        console.log("XSXSXSXSXSXSXSXSXS");
        console.log("thingList: ", data);
        this.thingList = data;
      }
    });
  }

}
