import { Component ,Inject} from '@angular/core';
import {ReactiveFormsModule,  FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { AuthenticationService } from '../../services/auth.service'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})

export class TestComponent {

  // -------------------------------------------------------------
  //
  //           START RegisterComponent
  //
  // -------------------------------------------------------------
  registerForm: FormGroup;
  errorMessage: string = '';
  submitted:boolean = false;
  showsuccessFullyMessage : boolean = false;
    href:string = '' ;

  constructor(private authService: AuthenticationService, private fb: FormBuilder ,private router: Router) {
    this.registerForm = this.fb.group({
      // Définissez vos contrôles de formulaire ici
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // Ajoutez d'autres contrôles si nécessaire
    });

   }


  ngOnInit() {
      this.createForm();
      this.href = this.router.url;
      console.log("URL: ", this.href);
  }

  createForm(): void{
    this.registerForm =  this.fb.group({
      $key: new FormControl(null),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        //Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
          ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ])
    });
  }
  
  onSubmit(buttonType?: string | null): void {
    this.submitted = true;
  
    // Check if buttonType is not null or undefined
    if (buttonType !== null && buttonType !== undefined) {
      const keyControl = this.registerForm.get('$key');
  
      // Check if keyControl is not null or undefined
      if (keyControl !== null && keyControl !== undefined) {
        // Check if the value of keyControl is null
        if (keyControl.value === null) {
          if (buttonType === "Inscription" && this.registerForm.valid) {
            console.log(buttonType);
  
            this.authService.register(this.registerForm.value, this.showsuccessFullyMessage);
            this.showsuccessFullyMessage = true;
            setTimeout(() => {
              this.showsuccessFullyMessage = false;
            }, 3000);
            this.registerForm.reset();
          }
        }
      }
    }
  
    this.submitted = false;
  }
  
  

// -------------------------------------------------------------
//
//          END RegisterComponent
//
// -------------------------------------------------------------

}
