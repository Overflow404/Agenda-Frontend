import {AbstractControl} from '@angular/forms';

export function gmtValidator(control: AbstractControl): { [key: string]: boolean } | null {

  function wrongGmt(value: string) {
    if (value.length !== 5 && value.length !== 6) {
      return true;
    }

    if (!value.startsWith('GMT') && !value.startsWith('gmt')) {
      return true;
    }

    const symbol = value.charAt(3);

    if (symbol !== '+' && symbol !== '-') {
      return true;
    }

    const hour: number = Number(value.slice(4));

    if (isNaN(hour)) {
      return true;
    }

    return hour < 0 || hour > 12;


  }

  if (control.value !== undefined && (isNaN(control.value))) {
    if (wrongGmt(control.value)) {
      return {wrongGmt: true};
    }

  }
  return null;
}

