import {ValidateFn} from 'codelyzer/walkerFactory/walkerFn';
import {AbstractControl} from '@angular/forms';

export function NameValidator(regExp: RegExp): any {
  return (control: AbstractControl): { [key: string]: any } => {
    const forbidden = regExp.test(control.value);
    console.log(forbidden);
    if (forbidden) {
      return {errorMsg:  control.value + ' is forbidden!'};
    } else {
      return null;
    }
  };

}
