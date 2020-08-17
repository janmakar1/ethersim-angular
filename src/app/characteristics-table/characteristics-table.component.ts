import { Component, OnInit } from '@angular/core';

import { CharacteristicsDataService } from '../characteristics-data.service';
import { CharacteristicsInterface }from '../characteristics.interface';

@Component({
  selector: 'app-characteristics-table',
  styleUrls: ['characteristics-table.component.css'],
  templateUrl: 'characteristics-table.component.html',
})
export class CharacteristicsTableComponent implements OnInit {

  displayedColumns: string[] = ['frequency', 'value'];
  dataSource: CharacteristicsInterface[];

  constructor(private service : CharacteristicsDataService) {}

  ngOnInit() {
    this.dataSource = this.service.getUtp5Przesluchy();
  }

}