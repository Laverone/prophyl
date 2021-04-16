import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootNavComponent } from './root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { TableAlarmComponent } from './table-alarm/table-alarm.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TitleComponent } from './title/title.component';
import { AlarmComponent } from './alarm/alarm.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TileComponent } from './tile/tile.component';
import { TileEmptyComponent } from './tile-empty/tile-empty.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatStepperModule} from '@angular/material/stepper';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    RootNavComponent,
    TableAlarmComponent,
    SidenavComponent,
    TitleComponent,
    AlarmComponent,
    LoginComponent,
    DigitalClockComponent,
    TileComponent,
    TileEmptyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule,
    MatCheckboxModule,
    MatRadioModule,
    MatPaginatorModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCardModule,
    FlexLayoutModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
