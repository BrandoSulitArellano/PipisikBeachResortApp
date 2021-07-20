/* eslint-disable max-len */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kn1',
  templateUrl: './kn1.page.html',
  styleUrls: ['./kn1.page.scss'],
})
export class KN1Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  text1 = 'Input neccessary details above and click the confirm button to book your chosen room.';
  text2 = '';
  text3 = '';
  text4 = '';
  text5 = '';
  random = Math.floor(Math.random()*9999999999)+1;
  price = 12000;
  startDate: Date;

  public araw = {
    days: 0
  };

  confirm(){

    if(this.araw.days == 0){
      this.router.navigate(['kn1']);
    }else if(this.startDate == null){
      this.router.navigate(['kn1']);
    }
      else{
      this.text2 = 'Total: ₱' + this.price * this.araw.days;
      this.text1 = 'Your reservation for Kerwin is now processing, wait for our staff to call your provided number for verification. Thank You for trusting us.';
      this.text3 = ('Check in date: ' + this.startDate);
      this.text5 = ('Days: '+this.araw.days);
      this.text4 = ('Reference Number: ' + this.random);
      console.log(this.random);
      console.log(this.startDate);
      console.log('Days:' + this.araw.days);
      console.log('Price: ' + this.price);
      console.log('Total: ₱' + this.price * this.araw.days);
    }

  }

}
