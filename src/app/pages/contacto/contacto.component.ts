import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  private isValidEmail = /\S+@\S+\.\S+/;
  private isNum = /^([0-9])*$/
  contacto = this.fb.group({
    //Validators.pattern metodo de FormBuelder que valida con una expresion regular previamente creado
    firstname: ['',Validators.required],
    lastname: ['',Validators.required],
    email: ['',[Validators.required,Validators.pattern(this.isValidEmail)]],
    phone: ['',[Validators.required,
    Validators.maxLength(9),
    Validators.minLength(9),
    Validators.pattern(this.isNum)]],
    subject: ['',Validators.required],
    message:['',Validators.required]
  });
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

   //valid input text
   isValidField(field: string): string {
    const validatedField = this.contacto.get(field);
    return (!validatedField?.valid && validatedField?.touched) ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  }

}
