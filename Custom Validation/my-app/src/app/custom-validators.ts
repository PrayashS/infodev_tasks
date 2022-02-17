import {AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function customValidator():ValidatorFn{
 
    return (control:AbstractControl):ValidationErrors | null =>{
        console.log(control)
        if(control.value==='Prayash'){
            
            return {custom:true}
        }
        return null;
    }
}