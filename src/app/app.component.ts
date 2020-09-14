import { Component } from '@angular/core';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public service: SettingsService) { }

  title = 'ethersim-angular';

//   links = ['Settings', 'Input', 'Output', 'Eyechart'];
//   activeLink = this.links[0];

  navLinks = [
    {
        label: 'Settings',
        link: './settings',
        index: 0
    },
    {
        label: 'Input',
        link: './input',
        index: 1
    },
    {
        label: 'Output',
        link: './output',
        index: 2
    }, 
    {
        label: 'Eyechart',
        link: './eyechart',
        index: 3
    } 
];

}
