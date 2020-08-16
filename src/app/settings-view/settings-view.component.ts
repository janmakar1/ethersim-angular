import { Component, OnInit } from '@angular/core';

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
  standardUtpOptions = ['3', '5', '5e'];
  generationMethods: TwoStrings[] = [
    {value: 'zeros', viewValue: 'same zera'},
    {value: 'ones', viewValue: 'same jedynki'},
    {value: 'random', viewValue: 'ciąg losowy'},
  ]

  length: number = 10;
  selectedEthernetStandard: string;
  selectedUtpStandard: string;
  selectedGenerationMethod: TwoStrings;

  ngOnInit(): void {
  }

}
