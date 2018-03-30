#angular5-time-picker
This module is a fork from https://github.com/SteveDunlap13/MaterialTimeControl.

It provides a time picker component compatible with Angular Material 5.

## Environment
This component works with Angular 5

## Install
Install with the following command:

	npm install angular5-time-picker --save

## Usage

	import { MaterialTimeControlModule } from 'angular5-time-picker'
	@NgModule({
	imports: [
	      BrowserModule,
    		BrowserAnimationsModule,
    		MaterialTimeControlModule,
  		],
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

	<div class="container">
  	<form class="demo-form">
    	<w-mat-timepicker color="primary" [(userTime)]="exportTime"></w-mat-timepicker>
  	</form>
	</div>

	<mat-card>
  	<mat-card-content>
      <w-time color="primary" [(userTime)]="exportTime"></w-time>
  	</mat-card-content>
	</mat-card>

## Run demo

	npm install
	npm start
