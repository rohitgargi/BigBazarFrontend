import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function matchRegex(errorString:string,reg: RegExp):ValidatorFn{
    return(control : AbstractControl): ValidationErrors | null =>{
        
        const checkVal = reg.test(control.value);
        console.log(checkVal)

        return !checkVal ? { password:{ error: errorString + "" }} : null

    }
}