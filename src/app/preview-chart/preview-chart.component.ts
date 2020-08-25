import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

import { CharacteristicsDataService} from '../characteristics-data.service';

import * as d3 from 'd3';
import { UtpStandardType } from '../utp-standard-type.enum';
import { CharacteristicsType } from '../characteristics-type.enum';

@Component({
  selector: 'app-preview-chart',
  templateUrl: './preview-chart.component.html',
  styleUrls: ['./preview-chart.component.css']
})
export class PreviewChartComponent implements OnInit, OnChanges {

  constructor(private service: CharacteristicsDataService) { }

  outerHeight: number = 500;
  outerWidth: number = 500;

  @Input() selectedUtpOption: UtpStandardType = UtpStandardType.utp3; 

  ngOnInit(): void {
    let realDataAsNumbers = this.service.getAsNumberTuple(UtpStandardType.utp3, CharacteristicsType.tlumienie);
    
    let xScale = d3.scaleLinear()
      .domain([0, 20])
      .range([0,500]);

    let yScale = d3.scaleLinear()
      .domain([0,20])
      .range([0, 500]);

    let line = d3.line()
      // .x(function(d) {return d[0]})
      // .y(function(d) {return d[1]})
      .x(function(d) {return xScale(d[0])})
      .y(function(d) {return yScale(d[1])})

    let svg = d3.select('svg');

    let path = svg
      .append("path")
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 1)
      .attr("d", line(realDataAsNumbers));
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Preview chart:: ng on changes");    
  }
}
