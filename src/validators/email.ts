import { FormControl } from '@angular/forms';

export class EmailValidator {
  
  email: ['', 
          Validators.compose([
              Validators.required,
              Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)(\\.[A-Za-z]{2,})$'),
              Validators.maxLength(30),
            ])
        ]
        
  
}