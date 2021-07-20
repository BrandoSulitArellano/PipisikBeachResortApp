/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pck1',
  templateUrl: './pck1.page.html',
  styleUrls: ['./pck1.page.scss'],
})
export class Pck1Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  text1 = 'Input your check in date above and click the confirm button to book and prepare your chosen package.';
  text2 = '';
  text3 = '';
  text4 = '';
  random = Math.floor(Math.random()*9999999999)+1;
  price = 3000;
  startDate: Date;

  avail(){

    if(this.startDate == null){
      this.router.navigate(['pck1']);
    }else {
    this.text1='Your ordered Package 1 is now processing, wait for our staff to call your provided number for verification. Thank You for trusting us.';
    this.text4 = ('Reference Number: ' + this.random);
    this.text3 = ('Check in date: ' + this.startDate);
    this.text2='Amount to pay: ₱' + this.price;
    console.log(this.startDate);
    console.log(this.price);
    }
  }

}
