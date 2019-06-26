import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThingDTO } from '../../../dto/ThingDTO';
import { ThingService } from '../../services/thing.service';
import { Router } from '@angular/router';
import { ActioneventDTO} from '../../../dto/ActioneventDTO';

@Component({
  selector: 'app-thing-info',
  templateUrl: './thing-info.component.html',
  styleUrls: ['./thing-info.component.css']
})
export class ThingInfoComponent implements OnInit {
  id : String;
  thingList : Array<ThingDTO>;
  thing : ThingDTO;
  aeList : Array<ActioneventDTO>;
  constructor(private activatedRoute: ActivatedRoute, private thingService:ThingService, private router : Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(p => {
      this.id = p['id'];
      console.log("thing-info:", this.id);
      this.thingService.findOne(this.id).subscribe((data: ThingDTO) =>{
        if(data != null){
          console.log("thingClick: ", data);
          this.thing = data;
          
      }
    })
      
    });
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