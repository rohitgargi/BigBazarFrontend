import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function matchRegex(reg: RegExp):ValidatorFn{
    return(control : AbstractControl): ValidationErrors | null =>{
        console.log(control);

        if(control.value === '' || control.value === null){
            return null;
        }
        
        const checkVal = reg.test(control.value);

        return !checkVal ? { 'passwordCriteria': true} : null
    }
}

export function MustMatch(cntrl1: string, cntrl2:string){

    return(formGrp: FormGroup)=>{
        const pwd = formGrp.controls[cntrl1];
        const cnfpwd = formGrp.controls[cntrl2];

        console.log('pwd', pwd);
        console.log('cnfpwd', cnfpwd);

        if(cnfpwd.errors && !cnfpwd.errors['mustMatch']){
            return;
        }

        if(pwd.value !== cnfpwd.value){
            cnfpwd.setErrors({mustMatch:true})
        }else{
            cnfpwd.setErrors(null);
        }
    }
}