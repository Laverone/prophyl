import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cf-tile-empty',
  templateUrl: './tile-empty.component.html',
  styleUrls: ['./tile-empty.component.scss']
})
export class TileEmptyComponent  {
  @Input()
  deviceXs!: boolean;
}
