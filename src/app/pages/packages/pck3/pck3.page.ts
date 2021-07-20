/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pck3',
  templateUrl: './pck3.page.html',
  styleUrls: ['./pck3.page.scss'],
})
export class Pck3Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  text1 = 'Input your check in date above and click the confirm button to book and prepare your chosen package.';
  text2 = '';
  text3 = '';
  text4 = '';
  text5 = '';
  random = Math.floor(Math.random()*9999999999)+1;
  price = 1500;
  startDate: Date;

  public ilan = {
    howmany: 0
  };

  avail(){

    if(this.ilan.howmany == 0){
      this.router.navigate(['pck3']);
    }else if(this.ilan.howmany >= 6){
      this.router.navigate(['pck3']);
    }else if(this.startDate == null){
      this.router.navigate(['pck3']);
    }else{
      this.text2 = 'Total: ' + this.price * this.ilan.howmany;
      this.text1 = 'Your reservation for Package 3 is now processing, wait for our staff to call your provided number for verification.';
      this.text4 = ('Reference Number: ' + this.random);
      this.text5 = ('Quantity: ' + this.ilan.howmany);
      this.text3 = ('Check in date: ' + this.startDate);
      console.log('Quantity:' + this.ilan.howmany);
      console.log('Price: ' + this.price);
      console.log('Total: ₱' + this.price * this.ilan.howmany);
    }
  }
}
