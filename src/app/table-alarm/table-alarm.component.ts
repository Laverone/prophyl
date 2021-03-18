import { Component, OnInit } from '@angular/core';

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
  displayedColumns: string[] = ['date', 'interconnexion', 'message'];
  dataSource = ALARM_DATA;

  constructor() { }

  ngOnInit(): void {
  }
  

}

export class CheckboxConfigurableExample {
  labelPosition: 'before' | 'after' = 'after';
}
