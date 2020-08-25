import { CharacteristicsType } from './characteristics-type.enum'; 
import { UtpStandardType } from './utp-standard-type.enum';
import { CharacteristicsInterface } from './characteristics.interface';
import * as characteristicsData from './characteristics.data';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacteristicsDataService {

  constructor() { }

  characteristicsInterface2number(ch: CharacteristicsInterface): [number, number] {
    return [ch.frequency, ch.value];
  }

  characteristicsInterfaceArray2numbernumber(ch: CharacteristicsInterface[]): [number,number][]{

    // let ret: [number, number][] = [];
    // console.log(">>>");
    // ch.forEach((value, index, array) => {
    //   const val = characteristicsInterface2number(value);
    //   console.log(val);
    //   ret.push(val);
    // });

    let ret: [number,number][] = ch.map((value, index, array) => this.characteristicsInterface2number(value));

    return ret;

  }

  public getAsNumberTuple(standard: UtpStandardType, what: CharacteristicsType): [number, number][] {
    const characteristicsIntf = this.get(standard, what);
    return this.characteristicsInterfaceArray2numbernumber(characteristicsIntf);

  }

  // czy nie lepiej dac to nested??
  public get(standard: UtpStandardType, what: CharacteristicsType) {
    if(standard == UtpStandardType.utp3 && what == CharacteristicsType.przesluchy) {
      return characteristicsData.data_UTP3_przesluchy;
    } else if(standard == UtpStandardType.utp3 && what == CharacteristicsType.tlumienie) {
      return characteristicsData.data_UTP3_tlumienie;
    } else if(standard == UtpStandardType.utp5 && what == CharacteristicsType.przesluchy) {
      return characteristicsData.data_UTP5_przesluchy;
    } else if(standard == UtpStandardType.utp5 && what == CharacteristicsType.tlumienie) {
      return characteristicsData.data_UTP5_tlumienie;
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
