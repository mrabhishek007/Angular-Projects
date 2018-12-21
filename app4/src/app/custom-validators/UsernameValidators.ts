import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';


export class UsernameValidators {

  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return {cannotcontainspace: true};
    }
    return null;
  }

  // asynchronous validators (validates when validation requires some server side interactions)
  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'vicky'){
          resolve({shouldBeUnique: true})
        }else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
