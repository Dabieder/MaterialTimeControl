import {MAT_INPUT_VALUE_ACCESSOR} from '@angular/material/input';

import {
  Directive,
  ElementRef,
  forwardRef,
  Input,
} from '@angular/core';

import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  ValidatorFn,
  Validators
} from '@angular/forms';
import {WTimeComponent} from "./time-control/w-time/w-time.component";

export const MAT_TIMEPICKER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TimepickerDirective),
  multi: true
};


export const MAT_TIMEPICKER_VALIDATORS: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => TimepickerDirective),
  multi: true
};

export class MatTimepickerInputEvent {
  /** The new value for the target timepicker input. */
  value: string;

  constructor(/** Reference to the timepicker input component that emitted the event. */
              public target: TimepickerDirective,
              /** Reference to the native input element associated with the timepicker input. */
              public targetElement: HTMLElement) {
    this.value = this.target.value;
  }
}

@Directive({
  selector: 'input[matTimepicker]',
  providers: [
    {provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: TimepickerDirective},
  ],
  exportAs: 'matTimepickerInput',
})

export class TimepickerDirective {

  @Input('matTimepicker') timepicker: WTimeComponent;

  @Input()
  get value(): string {

    if (this.timepicker) {

      if (!this.timepicker.userTime) {
        this._elementRef.nativeElement.value = '';
        return '';
      }

      let meriden = `${this.timepicker.userTime.meriden}`;
      if (this.timepicker.userTime.format === 24) {
        meriden = '';
      }

      let hour = `${this.timepicker.userTime.hour}`;
      if (this.timepicker.userTime.hour === 24) {
        hour = '00';
      }

      if (this.timepicker.userTime.minute === 0) {
        this._elementRef.nativeElement.value = `${hour}:00 ${meriden}`;
        return `${hour}:00 ${meriden}`;

      } else if (this.timepicker.userTime.minute < 10) {

        const tt = '0' + String(this.timepicker.userTime.minute);
        this._elementRef.nativeElement.value = `${hour}:${tt} ${meriden}`;
        return `${hour}:${tt} ${meriden}`;

      } else {
        this._elementRef.nativeElement.value = `${hour}:${this.timepicker.userTime.minute} ${meriden}`;
        return `${hour}:${this.timepicker.userTime.minute} ${meriden}`;
      }
    }

    this._elementRef.nativeElement.value = '';
    return '';
  }

  constructor(private _elementRef: ElementRef) {

  }

}
