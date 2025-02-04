import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


// Validator function
export function PasswordMatchValidator(password: string, confirmPassword: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const passwordControl = control.get(password);
    const confirmPasswordControl = control.get(confirmPassword);

    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }
    // Check if passwords match
    const error = passwordControl.value === confirmPasswordControl.value ? null : { passwordMismatch: true };

    confirmPasswordControl.setErrors(error);

    return error;
  };
}
