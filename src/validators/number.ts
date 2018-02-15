import { FormControl } from '@angular/forms';

export class NumberValidator{
    
    static numberValidator(c: FormControl): any {
      if(isNaN(c.value)){
        return { 'Not a number':true};
      }
  
      return null
    }
    
}//end of NumberValidator