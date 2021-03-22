import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'cf-root-nav',
  templateUrl: './root-nav.component.html',
  styleUrls: ['./root-nav.component.scss']
})

export class RootNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    panelOpenState = false;
    customCollapsedHeight: string = '35px';
    customExpandedHeight: string = '45px';

    icon: boolean = false;

    click(){
    this.icon = !this.icon;
    
  }

  myimage: string = "assets/img/rte_logo.png"

  constructor(private breakpointObserver: BreakpointObserver) {}
}



