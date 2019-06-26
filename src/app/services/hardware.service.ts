import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HardwareDTO } from '../../../src/dto/HardwareDTO';
import { ParamDTO } from '../../../src/dto/ParamDTO';

@Injectable({
  providedIn: 'root'
})
export class HardwareService {

  constructor(private http: HttpClient) { }

  insertHardware(paramDTO: ParamDTO){
    return this.http.post( 'http://localhost:8080/Hardware/insertHardware', paramDTO);
  }

  showHardware(paramDTO: ParamDTO){
    return this.http.get('http://localhost:8080/Hardware/showHardware?jwt='+ paramDTO.jwt);
  }

  deleteHardware(paramDTO: ParamDTO){
    return this.http.post('http://localhost:8080/Hardware/deleteHardware', paramDTO);
  }

  updateHardware(hardwareDTO: HardwareDTO) {
    return this.http.put( 'http://localhost:8080/Hardware/updateHardware', hardwareDTO);
  }

  findHardware(idHardware: number){
    return this.http.get('http://localhost:8080/Hardware/findHardware?idHardware='+idHardware);
  }
}
