import { Component, OnInit } from '@angular/core';
import { UtpStandardType } from '../utp-standard-type.enum';
import { SettingsService } from '../settings.service';
import { GenerationMethod } from '../generation-method.enum';

@Component({
  selector: 'app-settings-view',
  templateUrl: './settings-view.component.html',
  styleUrls: ['./settings-view.component.css']
})
export class SettingsViewComponent implements OnInit {

  constructor(private service: SettingsService) {}

  standardEthernetOptions = ['10', '100', '1000', '10G', '100G'];
  standardUtpOptions = [
    { value: UtpStandardType.utp3, viewValue: '3', },
    { value: UtpStandardType.utp5, viewValue: '5', },
    { value: UtpStandardType.utp5e, viewValue: '5e', },
  ];

  generationMethods = [
    {value: GenerationMethod.ZEROS, viewValue: 'same zera'},
    {value: GenerationMethod.ONES, viewValue: 'same jedynki'},
    {value: GenerationMethod.RANDOM, viewValue: 'ciąg losowy'},
  ]

  length: number = 10;
  selectedEthernetStandard: string;
  selectedUtpStandard: UtpStandardType;
  selectedGenerationMethod: number;
  inputSequence: Array<Number> = [];
  inputSequenceAsString: string = '';
  formSubmmited: boolean;
  

  ngOnInit(): void {
  }

  submitForm(): void {
    console.log("clicked!!");
    this.service.setFormSubmitted(true);
    this.service.setEthernetStandard(this.selectedEthernetStandard);
    // this.service.setUtpStandard(this.selectedUtpStandard);
    this.generateInputSequence();
    console.log(this.inputSequence);
    this.service.setInputSequence(this.inputSequence);
    
  }

  private randomBit() {
    if (Math.random() > 0.5) {
      return 1;
    } else {
      return 0;
    }
  }

  generateInputSequence() {
    let inputSequence = new Array(this.length);
    console.log("selectedGenerationMethod:");
    console.log(this.selectedGenerationMethod);
    if(this.selectedGenerationMethod == GenerationMethod.ZEROS) {
      inputSequence.fill(0);
    } else if (this.selectedGenerationMethod == GenerationMethod.ONES) {
      inputSequence.fill(1);
    } else if (this.selectedGenerationMethod == GenerationMethod.RANDOM) {
      for (let index = 0; index < inputSequence.length; index++) {
        inputSequence[index] = this.randomBit();
      }
    } else {
      console.error("nothing selected!!!");
    }
    console.log("input sequence:");
    console.log(inputSequence);
    this.inputSequence = inputSequence;
    this.inputSequenceAsString = this.stringifyArray(this.inputSequence);
  }

  private stringifyArray(arr: Array<Number>) {
    let str: string = '';
    arr.forEach(element => {
      str += element;
    });
    return str;
  }

}
