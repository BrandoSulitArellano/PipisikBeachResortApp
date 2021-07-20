import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private router: Router) { }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public form = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    email_address: '',
    password: '',
    password1: '',
    address:'',
    contactnum: ''

  };

  ngOnInit() {
  }

  submit(){
    console.log(this.form.email_address);
    console.log(this.form.address);
    console.log(this.form.contactnum);

    this.router.navigate(['loginpage']);
  }

}
