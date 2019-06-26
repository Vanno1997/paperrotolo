import { Component, OnInit } from '@angular/core';
import {KeywordService} from '../../../../../src/app/services/keyword.service';
import { ThingService } from '../../../../../src/app/services/thing.service';
import { Router } from '@angular/router';
import { KeywordDTO } from '../../../../dto/KeywordDTO';
import { ThingDTO } from '../../../../dto/ThingDTO';
import { LabelDTO } from '../../../../dto/LabelDTO';
import { UtenteDTO } from '../../../../dto/UtenteDTO';
import { UtenteService } from '../../../services/utente.service';
import { LabelService } from '../../../../app/services/label.service';
import { NgModel } from '@angular/forms';
import { ThingListComponent } from '../../../../app/components/thing/thing-list/thing-list.component';
import { ParamDTO } from '../../../../dto/ParamDTO';

@Component({
  selector: 'app-keyword-insert',
  templateUrl: './keyword-insert.component.html',
  styleUrls: ['./keyword-insert.component.css']
})
export class KeywordInsertComponent implements OnInit {
  private keywordDTO: KeywordDTO;
  private thingDTO: ThingDTO;
  private labelDTO: LabelDTO;
  private utenteDTO: UtenteDTO;
  private thingList: Array<ThingDTO>;
  private paramDTO: ParamDTO;
  private jwt: string;

  constructor(private thingService: ThingService, private router: Router, private keywordService: KeywordService, private utenteService: UtenteService, private labelService: LabelService) { }

  ngOnInit() {
    //this.userDTO = new UserDTO(0,"","",0);
    //this.labelDTO = new LabelDTO(0,"",this.userDTO);
    //this.thingDTO = new ThingDTO(0,"","","","","","", this.userDTO, this.labelDTO);
    /*
    this.keywordDTO = new KeywordDTO(0,"");
    this.jwt = sessionStorage.getItem("jwt");
    this.thingService.showThing(this.paramDTO).subscribe((data: any) => {
        if(data != null) {
          console.log(data);
          this.thingList = data;
        }
    })*/
    
  }

  insertKeyword(){ 
     this.jwt = sessionStorage.getItem("jwt");
     this.paramDTO = new ParamDTO(this.jwt, this.keywordDTO);
     this.keywordService.insertKeyword(this.paramDTO).subscribe((data: any) => {
      
       if(data != null)
         alert("Inserimento effettuato");
       else
         alert("Inserimento fallito");
         this.router.navigateByUrl("/homeBO");
    })
   } 
}