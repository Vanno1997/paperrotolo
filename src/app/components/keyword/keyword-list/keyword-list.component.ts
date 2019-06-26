import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeywordService } from '../../../services/keyword.service';
import { KeywordDTO } from '../../../../dto/KeywordDTO';
import {LinkTKDTO} from '../../../../dto/LinkTKDTO';
import { LinkTKService } from '../../../services/linkTk.service';
import { ThingDTO } from '../../../../dto/ThingDTO';
import { ParamDTO } from '../../../../dto/ParamDTO';

@Component({
  selector: 'app-keyword-list',
  templateUrl: './keyword-list.component.html',
  styleUrls: ['./keyword-list.component.css']
})

export class KeywordListComponent implements OnInit {
  private keywordList: Array<KeywordDTO>;
  private arrayThingDTO: Array<ThingDTO>;
  private arrayLink: Array<LinkTKDTO>;
  private arrayLinkSession: Array<LinkTKDTO>;
  private thingDTO: ThingDTO;
  private keywordDTO: KeywordDTO;
  private paramDTO: ParamDTO;
  private jwt: string;

  private nomeKey: String;

  constructor(private keywordService: KeywordService, private router: Router, private linkTKService: LinkTKService) { }

  ngOnInit() {
    this.jwt = sessionStorage.getItem("jwt");
    this.paramDTO = new ParamDTO(this.jwt, this.keywordDTO);
    this.keywordService.showKeyword(this.paramDTO).subscribe((data: any) =>{
      if(data != null){
        this.keywordList = data;
      }
    })
  }

  chooseKeyword(idKeyword: number){
    sessionStorage.setItem("idKeyword", JSON.stringify(idKeyword));
    this.router.navigateByUrl("/updateKeyword");
  }

  setDTO(keywordDTO: KeywordDTO){
    sessionStorage.setItem("KeywordDTOpassato", JSON.stringify(keywordDTO));
    this.router.navigate(["/homeBo//updateKeyword"])
  }

  showTK2(keywordDTO: KeywordDTO){
    sessionStorage.setItem("keySettata", JSON.stringify(keywordDTO));
    this.router.navigate(["homebO/showLinkThing"]);
  }

  showThingAssociate(keywordDTO: KeywordDTO){
    // del seguente metodo ci arriva un array di LinkTKDTO non un array di ThingDTO.
    this.keywordDTO = keywordDTO;
    this.jwt = sessionStorage.getItem("jwt");
    this.paramDTO = new ParamDTO(this.jwt, this.keywordDTO);
    this.linkTKService.findLinkTKByKeyword(this.paramDTO).subscribe((data: Array<LinkTKDTO>) => {
      if(data){
        if(data != null){
          this.arrayLinkSession = data;
          sessionStorage.setItem("arrayLinkSession", JSON.stringify(this.arrayLinkSession));
          this.router.navigate(["/homeBo/showLinkThing"]);
        }
      }}
    ) 
  }

  deleteKeyword(keywordDTO: KeywordDTO){
    this.keywordDTO = keywordDTO;
    this.jwt = sessionStorage.getItem("jwt");
    this.paramDTO = new ParamDTO(this.jwt, this.keywordDTO);
    this.keywordService.deleteKeyword(this.paramDTO).subscribe((data: any) =>{
      if(data){
        alert("Cancellazione effettuata");
        location.reload(true);
      }
      else
        alert("Cancellazione fallita");
      this.router.navigate(["homeBO"]);
    })
  }

}
