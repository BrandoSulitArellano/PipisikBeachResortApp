import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {

  constructor(private router: Router) { }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public form = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    email_address: '',
    password: ''
  };

  ngOnInit() {
  }
  print(){
    console.log(this.form);
    this.router.navigate(['loginhome']);
  }

  gotosignup(){
    this.router.navigate(['signup']);
  }

}
