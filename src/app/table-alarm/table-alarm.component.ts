import {SelectionModel} from '@angular/cdk/collections';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';




export interface AlarmElement {
  date: string;
  interconnexion: string;
  message: string;
}


@Component({
  selector: 'cf-table-alarm',
  templateUrl: './table-alarm.component.html',
  styleUrls: ['./table-alarm.component.scss']
})
export class TableAlarmComponent implements OnInit {

  @Input() alarms: AlarmElement[];

  displayedColumns: string[] = ['select','date', 'interconnexion', 'message'];
  data = Object.assign( alarms);
  dataSource = new MatTableDataSource<AlarmElement>(alarms);
  selection = new SelectionModel<AlarmElement>(true, []);
  

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  removeSelectedRows() {
    this.selection.selected.forEach(item => {
     let index: number = this.data.findIndex((d: AlarmElement) => d === item);
     console.log(this.data.findIndex((d: AlarmElement) => d === item));
     this.dataSource.data.splice(index,1);

     this.dataSource = new MatTableDataSource<AlarmElement>(this.dataSource.data);
   });
   this.selection = new SelectionModel<AlarmElement>(true, []);
 }

 removeAllRows(){
  this.dataSource.data=[];

  this.dataSource = new MatTableDataSource<AlarmElement>(this.dataSource.data);
   this.selection = new SelectionModel<AlarmElement>(true, []);
 }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach((row:any) => this.selection.select(row));
  }

  constructor() { }

  ngOnInit(): void {
  }
  

}


