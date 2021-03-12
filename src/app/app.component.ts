import { Component } from '@angular/core';0
import { UserData } from 'src/user/user.service';
import { UserService } from 'src/user/user.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


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


export class AppComponent{
  displayedColumns: string[] = ['birth', 'name', 'surname', 'initial'];
    dataSource = new MatTableDataSource<User>(USER_DATA);


  constructor(private userService: UserService){

  };

  }



const USER_DATA: User[] = [
  {birth: 'DD/MM/YYYY', name: 'Nom', surname: 'Prénom', initial: 'PH'},
  {birth: 'DD/MM/YYYY', name: 'Nom', surname: 'Prénom', initial: 'PH'},
  {birth: 'DD/MM/YYYY', name: 'Nom', surname: 'Prénom', initial: 'PH'},
  {birth: 'DD/MM/YYYY', name: 'Nom', surname: 'Prénom', initial: 'PH'},
  {birth: 'DD/MM/YYYY', name: 'Nom', surname: 'Prénom', initial: 'PH'},
 ];


