import { Component, OnInit} from '@angular/core';
import { ThingDTO } from '../../../../dto/ThingDTO';
import { ThingService } from '../../../services/thing.service';
import { Router } from '@angular/router';
import { UtenteDTO } from '../../../../dto/UtenteDTO';
import { LabelDTO } from '../../../../dto/LabelDTO';
import { UtenteService } from '../../../services/utente.service';
import { ParamDTO } from '../../../../dto/ParamDTO';


@Component({
  selector: 'app-thing-list',
  templateUrl: './thing-list.component.html',
  styleUrls: ['./thing-list.component.css']
})

export class ThingListComponent implements OnInit {
  private thingList: Array<ThingDTO>;
  private thingDTO: ThingDTO;
  private labelDTO: LabelDTO;
  private jwt: string;
  private paramDTO: ParamDTO;

  constructor(private thingService: ThingService, private router: Router) { }

  ngOnInit() {
    
    this.thingService.showThing().subscribe((data: Array<ThingDTO>) =>{
      if(data != null){
        console.log(data);
        this.thingList = data;
      }
    })
  }

  chooseThing(idThing: number){
    sessionStorage.setItem("idThing", JSON.stringify(idThing));
    this.router.navigate(["/homeBo/updateThing"]);
  }


  setThing(thing: ThingDTO){
    sessionStorage.setItem("DTOpassato", JSON.stringify(thing));
    this.router.navigateByUrl("/homeBo/updateThing");
  }

  deleteThing(thingDTO: ThingDTO){

    this.thingService.deleteThing(thingDTO).subscribe((data: any) =>{

      if(data){
        alert("Cancellazione effettuata");
        location.reload(true);
      }

      else
        alert("Cancellazione fallita");

      this.router.navigateByUrl("homeAdmin");
    })
  }
}
