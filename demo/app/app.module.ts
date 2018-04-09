import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { Angular5TimePickerModule } from '../../src/material-time-control.module';

import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';
import { TimepickerDirective } from '../../src/timepicker.directive';

@NgModule({
  declarations: [
    AppComponent,
    TimepickerDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Angular5TimePickerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
