import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss']
})
export class AlarmComponent implements OnInit {
  panelOpenState = false;
  customCollapsedHeight: string = '35px';
  customExpandedHeight: string = '45px';
  icon: boolean = false;

  click(){
    this.icon = !this.icon;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
