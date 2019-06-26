import { Component, OnInit } from '@angular/core';
import { LabelDTO } from '../../../../dto/LabelDTO';
import { UtenteDTO } from '../../../../dto/UtenteDTO';
import { Router } from '@angular/router';
import { LabelService } from '../../../../app/services/label.service';
import { ParamDTO } from '../../../../dto/ParamDTO';


@Component({
  selector: 'app-label-update',
  templateUrl: './label-update.component.html',
  styleUrls: ['./label-update.component.css']
})
export class LabelUpdateComponent implements OnInit {
  private labelDTO: LabelDTO;
  private utenteDTO: UtenteDTO;
  private paramDTO: ParamDTO;
  

  constructor(private router: Router, private labelService: LabelService) { }

  ngOnInit() {
    this.labelDTO = JSON.parse(sessionStorage.getItem("LabelDTOpassato")) as LabelDTO;
    }

  updateLabel(){
    alert(this.labelDTO.name);
    console.log("labelDTO in updateLabel: " , this.labelDTO);
    this.paramDTO = new ParamDTO(sessionStorage.getItem("jwt"), this.labelDTO);
    console.log("paramDTO in updateLabel: " , this.paramDTO);
    this.labelService.updateLabel(this.paramDTO).subscribe((data: LabelDTO) => {
      
      if(data != null)
        alert("Aggiornamento effettuato");
      else
        alert("Label già esistente");

      this.router.navigateByUrl("/homeBo");
    })
  }

}
