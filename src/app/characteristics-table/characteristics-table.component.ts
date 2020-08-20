import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { CharacteristicsDataService } from '../characteristics-data.service';
import { CharacteristicsInterface }from '../characteristics.interface';
import { UtpStandardType } from '../utp-standard-type.enum';

@Component({
  selector: 'app-characteristics-table',
  styleUrls: ['characteristics-table.component.css'],
  templateUrl: 'characteristics-table.component.html',
})
export class CharacteristicsTableComponent implements OnInit, OnChanges {

  displayedColumns: string[] = ['frequency', 'value'];
  dataSource: CharacteristicsInterface[];

  @Input() selectedUtpOption: UtpStandardType = UtpStandardType.utp3;

  // options: string[] = ['tlumienie', 'przesluchy', 'echo', 'regeneracja'];
  viewOptions: string[] = ['Tlumienie', 'Przesluchy' ];
  selectedViewOption: string = 'Tlumienie';

  constructor(private service: CharacteristicsDataService) {}

  ngOnInit() {
    console.log("Characteristics table:: ng on init");
    console.log("ChT::onInit::" + this.selectedUtpOption);    
    this.updateTable();
    
  }

  updateTable() {
    console.log(`updateTable::selected Utp Option ${this.selectedUtpOption}`);
    console.log(`updateTable::selected View Option ${this.selectedViewOption}`);
    if (this.selectedUtpOption == UtpStandardType.utp3 && this.selectedViewOption === 'Tlumienie') {
      this.dataSource = this.service.getUtp3Tlumienie();
    } else
    if (this.selectedUtpOption == UtpStandardType.utp3 && this.selectedViewOption === 'Przesluchy') {
      this.dataSource = this.service.getUtp3Przesluchy();
    } else
    if (this.selectedUtpOption == UtpStandardType.utp5 && this.selectedViewOption === 'Tlumienie') {
      this.dataSource = this.service.getUtp5Tlumienie();
    } else
    if (this.selectedUtpOption == UtpStandardType.utp5 && this.selectedViewOption === 'Przesluchy') {
      this.dataSource = this.service.getUtp5Przesluchy();
    } else {
      console.log("I AM HERE");
      console.log(this.selectedUtpOption);
      console.log(this.selectedViewOption);
      const initialCharacteristicsInterface : CharacteristicsInterface[] = [{ frequency: 0, value: 0 }];
      this.dataSource = initialCharacteristicsInterface
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Characteristics table:: ng on changes");

    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      console.log(`ChT::onChanges::${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
    this.updateTable();
  }

  onSelectionChange($event) {
    console.log("ChT::onSelectionChange " + $event.value);

    this.updateTable();
  }

}