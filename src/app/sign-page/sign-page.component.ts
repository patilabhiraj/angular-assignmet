import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-page',
  templateUrl: './sign-page.component.html',
  styleUrls: ['./sign-page.component.css']
})
export class SignPageComponent implements OnInit {
  registerForm: FormGroup;    
  

  constructor(private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      mobile: ['', Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])]
    });
  }
  onSubmit() {
    
    // stop here if form is invalid

    console.log('---form', this.registerForm.value);
    if(this.registerForm.value.mobile){
      this.router.navigateByUrl("two-step")
    }

  }

}