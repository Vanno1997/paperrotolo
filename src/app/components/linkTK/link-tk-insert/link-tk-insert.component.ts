import { Component, OnInit } from '@angular/core';
import { ThingDTO } from '../../../../dto/ThingDTO';
import { ThingService } from '../../../../../src/app/services/thing.service';
import { KeywordService } from '../../../../../src/app/services/keyword.service';
import { LinkTKService } from '../../../../../src/app/services/linkTk.service';
import { Router } from '@angular/router';
import { LabelDTO } from '../../../../dto/LabelDTO';
import { UtenteDTO } from '../../../../dto/UtenteDTO';
import { LinkTKDTO} from '../../../../dto/LinkTKDTO';
import { KeywordDTO } from '../../../../dto/KeywordDTO';
import { ParamDTO } from '../../../../dto/ParamDTO';

@Component({
  selector: 'app-link-tk-insert',
  templateUrl: './link-tk-insert.component.html',
  styleUrls: ['./link-tk-insert.component.css']
})
export class LinkTKInsertComponent implements OnInit {
  private keywordList: Array<KeywordDTO>
  private thingList: Array<ThingDTO>
  private thingDTO: ThingDTO;
  private labelDTO: LabelDTO;
  private keywordDTO: KeywordDTO;
  private linkTkDTO: LinkTKDTO;
  private paramDTO: ParamDTO;
  private paramDTO2: ParamDTO;
  private jwt: string;

  constructor(private thingService: ThingService, private keywordService: KeywordService, private linkTKService: LinkTKService, private router: Router) { }

  ngOnInit() {
    this.labelDTO = new LabelDTO(0,"",0);
    this.thingDTO = new ThingDTO(0,"","",[],[]);
    this.keywordDTO = new KeywordDTO(0,"");
    this.linkTkDTO = new LinkTKDTO(0,this.thingDTO, this.keywordDTO);
    
    this.jwt = sessionStorage.getItem("jwt");
    this.paramDTO = new ParamDTO(this.jwt, this.thingDTO);
    this.thingService.showThing().subscribe((data: any) =>{
      if(data != null){
        console.log(data);
        this.thingList = data;
      }
    })

    this.paramDTO2 = new ParamDTO(this.jwt, this.keywordDTO);
    this.keywordService.showKeyword(this.paramDTO2).subscribe((data: any) =>{
      if(data != null){
        console.log(data);
        this.keywordList = data;
      }
  })
  }

  insertLinkTK(thingDTO: ThingDTO, keywordDTO: KeywordDTO){
    this.linkTkDTO.thing.id = this.thingDTO.id;
    this.linkTkDTO.keyword.idKeyword = this.keywordDTO.idKeyword;
    this.jwt = sessionStorage.getItem("jwt");
    this.paramDTO = new ParamDTO(this.jwt, this.linkTkDTO);
    this.linkTKService.insertLinkTK(this.paramDTO).subscribe((data: any) => {

      if(data != null)
        alert("Inserimento effettuato");
      else
        alert("Collegamento già esistente");

        this.router.navigate(["/homeBo"]);
    })



  }
}
