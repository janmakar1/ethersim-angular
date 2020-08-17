import { CharacteristicsType } from './characteristics-type.enum'; 
import { UtpStandardType } from './utp-standard-type.enum';
import * as characteristicsData from './characteristics.data';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacteristicsDataService {

  constructor() { }

  // czy nie lepiej dac to nested??
  public get(standard: UtpStandardType, what: CharacteristicsType) {
    if(standard == UtpStandardType.utp3 && what == CharacteristicsType.przesluchy) {
      return characteristicsData.data_UTP3_przesluchy;
    } else if(standard == UtpStandardType.utp3 && what == CharacteristicsType.tlumienie) {
      return characteristicsData.data_UTP3_przesluchy;
    } else if(standard == UtpStandardType.utp5 && what == CharacteristicsType.przesluchy) {
      return characteristicsData.data_UTP3_przesluchy;
    } else if(standard == UtpStandardType.utp5 && what == CharacteristicsType.tlumienie) {
      return characteristicsData.data_UTP3_przesluchy;
    } else {
      throw new Error("need to specify UTP standard (3/5) and/or characteristics type (tlumienie/przesluchy)");
    }
  }

  // TODO: pozmieniac nazwy...
  public getUtp3Przesluchy() {
    return characteristicsData.data_UTP3_przesluchy;
  }

  public getUtp5Przesluchy() {
    return characteristicsData.data_UTP5_przesluchy;
  }

  public getUtp3Tlumienie() {
    return characteristicsData.data_UTP3_tlumienie;
  }

  public getUtp5Tlumienie() {
    return characteristicsData.data_UTP3_przesluchy;
  }

}
