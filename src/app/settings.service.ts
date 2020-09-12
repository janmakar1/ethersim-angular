import { Injectable } from '@angular/core';


/**
 * service to manage state of application
 */
@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  
  private _ethernetStandard: string;
  private _utpStandard: string;

  constructor() { }

  public getEthernetStandard() : string {
    return this._ethernetStandard;
  }

  public setEthernetStandard(ethernetStandard : string) {
    this._ethernetStandard = ethernetStandard;
  }
  

  public getUtpStandard() : string {
    return this._utpStandard;
  }

  public setUtpStandard(utpStandard: string) {
    this._utpStandard = utpStandard;
  }

  // todo: based on the generation method create input string
  // setInputString() {
  // }

  // TO DO: niewiem jak dzialaja set i get w TS...
  // public get getEthernetStandard() : string {
  //   return this._ethernetStandard;
  // }

  // public set setEthernetStandard(ethernetStandard : string) {
  //   this._ethernetStandard = ethernetStandard;
  // }
  

  // public get getUtpStandard() : string {
  //   return this._utpStandard;
  // }

  // public set setUtpStandard(utpStandard: string) {
  //   this._utpStandard = utpStandard;
  // }


}
