import { Component } from '@angular/core';
import { IUser } from 'src/user/user';
import { UserData } from 'src/user/user.service';
import { UserService } from 'src/user/user.service';


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

  user: IUser[]=[];

  selectedUser!: IUser[];

  constructor(private userService: UserService){

  };

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: user => {
        this.user= user
      },
    })
  
    this.selectedUser = new Array<IUser>();
  }

  getPeriodic(e:any, table:IUser)
  {
    if(e.target.checked)
    {
      this.selectedUser.push(table);
    }
    else
    {
      this.selectedUser = this.selectedUser.filter(m=>m!=table);
    }

  

  }
}


