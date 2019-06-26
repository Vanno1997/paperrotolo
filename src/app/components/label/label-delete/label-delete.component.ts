import { Component, OnInit } from '@angular/core';
import { ParamDTO } from '../../../../dto/ParamDTO';
import { LabelDTO } from '../../../../dto/LabelDTO';
import { Router } from '@angular/router';
import { LabelService } from '../../../../app/services/label.service';

@Component({
  selector: 'app-label-delete',
  templateUrl: './label-delete.component.html',
  styleUrls: ['./label-delete.component.css']
})
export class LabelDeleteComponent implements OnInit {
  private labelDTO: LabelDTO;
  private paramDTO: ParamDTO;

  constructor(private router: Router, private labelService: LabelService) { }

  ngOnInit() {
    this.paramDTO = new ParamDTO(sessionStorage.getItem("jwt"), this.labelDTO);
    this.labelService.deleteLabel(this.paramDTO).subscribe((data: any) => {
    
      if(data != null)
        alert("Inserimento effettuato");
      else
        alert("Inserimento fallito");
  
        this.router.navigateByUrl("/homeBo");
    })
  
  }

}
