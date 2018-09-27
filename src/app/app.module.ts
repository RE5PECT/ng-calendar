import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from 'ng-fullcalendar';

import { AppComponent } from './app.component';
import { CalendarioComponent } from './calendario/calendario.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarioComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
