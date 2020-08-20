import { Component, OnInit } from '@angular/core';
import { UtpStandardType } from '../utp-standard-type.enum';

interface TwoStrings {
  value: string,
  viewValue: string,
}

@Component({
  selector: 'app-settings-view',
  templateUrl: './settings-view.component.html',
  styleUrls: ['./settings-view.component.css']
})
export class SettingsViewComponent implements OnInit {

  constructor() { }

  standardEthernetOptions = ['10', '100', '1000', '10G', '100G'];
  standardUtpOptions = [
    { value: UtpStandardType.utp3, viewValue: '3', },
    { value: UtpStandardType.utp5, viewValue: '5', },
    { value: UtpStandardType.utp5e, viewValue: '5e', },
  ];
  generationMethods: TwoStrings[] = [
    {value: 'zeros', viewValue: 'same zera'},
    {value: 'ones', viewValue: 'same jedynki'},
    {value: 'random', viewValue: 'ciąg losowy'},
  ]

  length: number = 10;
  selectedEthernetStandard: string;
  selectedUtpStandard: UtpStandardType;
  selectedGenerationMethod: TwoStrings;

  ngOnInit(): void {
  }

  submitForm() {
    console.log("clicked!!")
  }

}
