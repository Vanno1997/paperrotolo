import { Component, OnInit } from '@angular/core';
import { LinkTKDTO} from '../../../../dto/LinkTKDTO';
import { KeywordDTO } from '../../../../dto/KeywordDTO';
import { Router } from '@angular/router';
import { LinkTKService } from '../../../../app/services/linkTk.service';
import { KeywordService } from '../../../../app/services/keyword.service';
import { ThingService } from '../../../../app/services/thing.service';
import { ThingDTO } from '../../../../dto/ThingDTO';
import { UtenteDTO } from '../../../../dto/UtenteDTO';
import { LabelDTO } from '../../../../dto/LabelDTO';
import { ParamDTO } from '../../../../dto/ParamDTO';

@Component({
  selector: 'app-link-tk-update',
  templateUrl: './link-tk-update.component.html',
  styleUrls: ['./link-tk-update.component.css']
})
export class LinkTkUpdateComponent implements OnInit {
  private linkTKList : Array<LinkTKDTO>;
  private thingList: Array<ThingDTO>;
  private keywordList: Array<KeywordDTO>;
  private linkTKDTO : LinkTKDTO;
  private keywordDTO: KeywordDTO;
  private thingDTO: ThingDTO;
  private labelDTO: LabelDTO;
  private paramDTO: ParamDTO;


  constructor(private thingService: ThingService, private keywordService: KeywordService, private linkTKService: LinkTKService, private router: Router) { }

  ngOnInit() {
    this.labelDTO = new LabelDTO(0,"",0);
    this.thingDTO = new ThingDTO(0,"","",[],[]);
    this.keywordDTO = new KeywordDTO(0,"");
    this.linkTKDTO = new LinkTKDTO(0,this.thingDTO, this.keywordDTO);

    this.thingService.showThing().subscribe((data: any) =>{
      if(data != null){
        console.log(data);
        this.thingList = data;
      }
    })

    this.keywordService.showKeyword(this.paramDTO).subscribe((data: any) =>{
      if(data != null){
        console.log(data);
        this.keywordList = data;
      }
  })
  }

  aggiornaLinkTK(){
    this.linkTKDTO = JSON.parse(sessionStorage.getItem("DTOpassato")) as LinkTKDTO;   
    this.linkTKDTO.thing.id = this.thingDTO.id;
    this.linkTKDTO.keyword.idKeyword = this.keywordDTO.idKeyword;
    
    this.linkTKService.updateLinkTK(this.linkTKDTO).subscribe((data: any) => {
    
      if(data != null)
        alert("Inserimento effettuato");
      else
        alert("Collegamento già esistente");
      this.router.navigateByUrl("/homeBo");
    })
  }
}
