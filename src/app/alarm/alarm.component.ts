import { Component, OnInit } from '@angular/core';
import { AlarmElement } from '../table-alarm/table-alarm.component';

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

  ALARMS: AlarmElement[] = [
    { date: '22/03/2019 07:08:00', interconnexion: 'IFA2', message: "Le programme commercial de IDx n'a pas été reçu."},
    { date: '21/03/2019 07:08:00', interconnexion: 'IFA2', message: "Le programme physique de IDx n'a pas été reçu."},
    { date: '22/03/2019 07:08:00', interconnexion: 'IFA2', message: "La demande de modification n°X n'a pas reçu de réponse. Elle est considérée comme acceptée"},
    { date: '22/03/2019 07:08:00', interconnexion: 'IFA2', message: "Vous avez reçu une demande de modification de programme."},
    { date: '22/03/2019 07:08:00', interconnexion: 'IFA2', message: "Le programme commercial de IDx n'a pas été reçu."},
    { date: '21/03/2019 07:08:00', interconnexion: 'IFA2', message: "Le programme physique de IDx n'a pas été reçu."},
    { date: '22/03/2019 07:08:00', interconnexion: 'IFA2', message: "La demande de modification n°X n'a pas reçu de réponse. Elle est considérée comme acceptée"},
    { date: '22/03/2019 07:08:00', interconnexion: 'IFA2', message: "Vous avez reçu une demande de modification de programme."},
  ];

  paginator: any;

  click(){
    this.icon = !this.icon;
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}


