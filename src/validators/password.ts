import { FormControl } from '@angular/forms';

export class PasswordValidator {
  
password: ['', 
          Validators.compose([
              Validators.required,
              Validators.pattern('[0-9]{4}'),
              Validators.minLength(3),
            ])
        ]
}