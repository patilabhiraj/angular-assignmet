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
  staticOpt = "1111";

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.otpForm = this.formBuilder.group({
      otp1: ['', Validators.compose([Validators.required])],
      otp2: ['', Validators.compose([Validators.required])],
      otp3: ['', Validators.compose([Validators.required])],
      otp4: ['', Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    const dynamicOtp = Object.values(this.otpForm.value);
    const withoutCommas = dynamicOtp.join('');
    if (this.staticOpt === withoutCommas) {
      alert("Otp is valid");
      this.router.navigateByUrl("dashboard");
    } else {
      alert("Otp is invalid");
      this.otpForm.reset();
    }
  }

  moveToNextInput(event, id) {
    const nextSibiling = document.getElementById(`otp${id + 1}`)
    if (event.target.value.length === 1 && nextSibiling !== null) {
      nextSibiling.focus();
    }

  }
}
