import { Component } from '@angular/core';
import { IUser } from 'src/user/user';


export class DateRangePickerOverviewExample {}
export interface User {
  birth: string;
  name: string;
  surname: string;
  initial: string;
}

@Component({
  selector: 'cf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class UserData {
  displayedColumns: string[] = ['birth', 'name', 'surname', 'initial'];
  userData: IUser[]= [];
}

