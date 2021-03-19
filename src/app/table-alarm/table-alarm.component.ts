import {SelectionModel} from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';



export interface AlarmElement {
  date: string;
  interconnexion: string;
  message: string;
}

const ALARM_DATA: AlarmElement[] = [
  { date: '22/03/2019 07:08:00', interconnexion: 'IFA2', message: "Le programme commercial de IDx n'a pas été reçu."},
  { date: '21/03/2019 07:08:00', interconnexion: 'IFA2', message: "Le programme physique de IDx n'a pas été reçu."},
  { date: '22/03/2019 07:08:00', interconnexion: 'IFA2', message: "La demande de modification n°X n'a pas reçu de réponse. Elle est considérée comme acceptée"},
  { date: '22/03/2019 07:08:00', interconnexion: 'IFA2', message: "Vous avez reçu une demande de modification de programme."},
];

@Component({
  selector: 'cf-table-alarm',
  templateUrl: './table-alarm.component.html',
  styleUrls: ['./table-alarm.component.scss']
})
export class TableAlarmComponent implements OnInit {


  displayedColumns: string[] = ['select','date', 'interconnexion', 'message'];
  data = Object.assign( ALARM_DATA);
  dataSource = new MatTableDataSource<AlarmElement>(ALARM_DATA);
  selection = new SelectionModel<AlarmElement>(true, []);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  

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


