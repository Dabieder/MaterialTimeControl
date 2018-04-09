#angular5-time-picker
This module is a fork from https://github.com/SteveDunlap13/MaterialTimeControl.

It provides a time picker component compatible with Angular Material 5.

## Environment
This component works with Angular 5

## Install
Install with the following command:

	npm install angular5-time-picker --save

## Usage

	import { Angular5TimePickerModule } from 'angular5-time-picker'
	import { TimepickerDirective } from 'angular5-time-picker';
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
	export class AppModule {
		...
	}

	Set up the config of the time-picker in AppModule.ts

	import { Component } from '@angular/core';

	@Component({
  		selector: 'app-root',
  		templateUrl: './app.component.html',
  		styleUrls: ['./app.component.scss']
		})
		export class AppComponent {

  	private exportTime = { hour: 7, minute: 15, meriden: 'PM', format: 12 };
	}

	Use the component in your html

	<mat-form-field>
    <input matInput [matTimepicker]="picker" placeholder="Choose a time">
    <mat-timepicker-toggle matSuffix [for]="picker"></mat-timepicker-toggle>
    <mat-timepicker #picker color="primary"></mat-timepicker>
  </mat-form-field>

## Run demo

	npm install
	npm start
