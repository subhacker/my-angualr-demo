import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';
import {Module_infoService} from './module_info.service'

export function forbiddenNameValidator(nameRe: RegExp,service): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const forbidden = service.checkModuleNameExist()
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}

@Directive({
  selector: '[appForbiddenName]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator {
  @Input('appForbiddenName') forbiddenName: string;

  constructor(private moduleInfoService:Module_infoService){
  }

  validate(control: AbstractControl): {[key: string]: any} {
    return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'),this.moduleInfoService)(control)
      : null;
  }
}



