import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeywordDTO } from '../../../../dto/KeywordDTO';
import {LinkTKDTO} from '../../../../dto/LinkTKDTO'; 
import { LinkTKService } from '../../../services/linkTk.service';

@Component({
  selector: 'app-link-tk-show-thing',
  templateUrl: './link-tk-show-thing.component.html',
  styleUrls: ['./link-tk-show-thing.component.css']
})

export class LinkTkShowThingComponent implements OnInit {
  private linkTKDTO: LinkTKDTO;
  private keywordDTO: KeywordDTO;
  private arrayLink: Array<LinkTKDTO>;

  constructor(private router: Router, private linkTKService: LinkTKService) { }

  ngOnInit() {
    this.arrayLink = JSON.parse(sessionStorage.getItem("arrayLinkSession")) as Array<LinkTKDTO>;
   
  } 
}