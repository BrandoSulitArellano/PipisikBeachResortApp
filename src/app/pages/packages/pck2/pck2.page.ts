/* eslint-disable eol-last */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pck2',
  templateUrl: './pck2.page.html',
  styleUrls: ['./pck2.page.scss'],
})
export class Pck2Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  text1 = 'Input your check in date above and click the confirm button to book and prepare your chosen package.';
  text2 = '';
  text3 = '';
  text4 = '';
  random = Math.floor(Math.random()*9999999999)+1;
  price = 5500;
  startDate: Date;

  avail(){

    if(this.startDate == null){
      this.router.navigate(['pck2']);
    }else {
    this.text1='Your ordered Package 2 is now processing, wait for our staff to call your provided number for verification. Thank You for trusting us.';
    this.text4 = ('Reference Number: ' + this.random);
    this.text3 = ('Check in date: ' + this.startDate);
    this.text2='Amount to pay: ₱' + this.price;
    console.log(this.startDate);
    console.log(this.price);
    }
  }

}
