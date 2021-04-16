import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'cf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prophyl';

  constructor(public authenticationService: AuthenticationService) { }

  logout() {
    this.authenticationService.logout();
  }
}
