import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-two-step',
  templateUrl: './two-step.component.html',
  styleUrls: ['./two-step.component.css']
})
export class TwoStepComponent {
  otpForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.otpForm = this.formBuilder.group({
      otp1: ['', Validators.compose([Validators.required])],
      otp2: ['', Validators.compose([Validators.required])],
      otp3: ['', Validators.compose([Validators.required])],
      otp4: ['', Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    console.log("this ", this.otpForm.value)
  }

  moveToNextInput(event, id) {
    console.log("abhiraj", event.target.value, event);
    const nextSibiling =  document.getElementById(`otp${id + 1}`)
    if(event.target.value.length === 1 && nextSibiling !== null) {
      nextSibiling.focus();
    }

  }
}
