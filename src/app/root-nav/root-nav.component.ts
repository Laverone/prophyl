import { Component, ViewChild, AfterViewInit, Input } from '@angular/core';
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
  @Input() test: any;

  myimage: string = "assets/img/rte_logo.png"
  

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {}


}