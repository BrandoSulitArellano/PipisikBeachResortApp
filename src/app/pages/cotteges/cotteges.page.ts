/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cotteges',
  templateUrl: './cotteges.page.html',
  styleUrls: ['./cotteges.page.scss'],
})
export class CottegesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  rooms: any[] = [
    {
      name: 'MINDAY',
      description: '1 room w/ 1 double deck bed and extra Mattress Air Conditioned TV w/ Cignal Cable Kitchen w/ Gas Stove, Refrigerator, Water Dispenser and Rice Cooker Toilet and Bathroom',
      price: ' ₱7000',
      image: 'assets/images/Minday.jpg',
      code: 'MY1'
    },
    {
      name: 'BRANDO',
      description: '2 rooms w/ 2 beds and extra mattress in each room Fully Airconditioned TV and Cignal Cable Kitchen w/ Gas Stove, Refrigerator, Water Dispenser and Rice Cooker Toilet and Bathroom in each room',
      price: ' ₱12000',
      image: 'assets/images/Brando.jpg',
      code: 'BO1'
    },
    {
      name: 'MHYKO 1 & 2',
      description: '2 rooms w/ 2 beds and extra mattress in each room Fully Airconditioned TV and Cignal Cable Kitchen w/ Gas Stove, Refrigerator, Water Dispenser and Rice Cooker Toilet and Bathroom in each room',
      price: ' ₱12000',
      image: 'assets/images/Mhyko.jpg',
      code: 'MO12'
    },
    {
      name: 'MHYKO 3',
      description: '1 room w/ 1 double deck bed TV w/ CIgnal Cable Toilet and Bathroom',
      price: ' ₱5000',
      image: 'assets/images/Mhyko.jpg',
      code: 'MO3'
    },
    {
      name: 'MAUIE',
      description: '2 rooms w/ 2 beds and extra mattress in each room Fully Airconditioned TV and Cignal Cable Kitchen w/ Gas Stove, Refrigerator, Water Dispenser and Rice Cooker Toilet and Bathroom in each room',
      price: ' ₱12000',
      image: 'assets/images/Mauie.jpg',
      code: 'ME1'
    },
    {
      name: 'KARLA',
      description: '2 rooms w/ 2 beds and extra mattress in each room Fully Airconditioned TV w/ Cignal Cable in each room Kitchen w/ Gas Stove, Refrigerator, Water Dispenser and Rice Cooker Toilet and Bathroom in each room',
      price: ' ₱12000',
      image: 'assets/images/Karla.jpg',
      code: 'KA1'
    },
    {
      name: 'Kerwin',
      description: '2 rooms w/ 2 beds and extra mattress in each room Fully Airconditioned TV w/ Cignal Cable in each room Kitchen w/ Gas Stove, Refrigerator, Water Dispenser and Rice Cooker Toilet and Bathroom in each room',
      price: ' ₱12000',
      image: 'assets/images/Kerwin.jpg',
      code: 'KN1'
    },
    {
      name: 'DARA',
      description: '4 rooms 2 rooms w/ 2 beds and extra mattress (Dara 1 and 3) 2 rooms w/ 1 bed and extra mattress ( Dara 2 and 4) Fully Airconditioned TV w/ Cignal Cable in each room) Kitchen w/ Gas Stove, Refrigerator, Water Dispenser and Rice Cooker on Dara 1 and 3 Toilet and Bathroom in each room',
      price: ' ₱12000',
      image: 'assets/images/Dara.jpg',
      code: 'DA1'
    },
    {
      name: 'KL-UP',
      description: '2 rooms w/ 2 beds and extra mattress in each room Fully Airconditioned TV w/ Cignal Cable Kitchen w/ Gas Stove, Refrigerator, Water Dispenser and Rice Cooker Toilet and Bathroom in each room',
      price: ' ₱12000',
      image: 'assets/images/KL.jpg',
      code: 'KLUP'
    },
    {
      name: 'KL-DOWN',
      description: '3 rooms 2 rooms w/ 2 beds and extra mattress in each room 1 room w/ 1 bed Fully Airconditioned TV w/ Cignal Cable Kitchen w/ Gas Stove, Refrigerator, Water Dispenser and Rice Cooker Toilet and Bathroom in each room',
      price: ' ₱4000 each',
      image: 'assets/images/KL.jpg',
      code: 'KLDOWN'
    },
    {
      name: 'CRYSTAL',
      description: '2 rooms w/ 1 double deck bed and extra mattress in each room Fully Airconditioned TV and Cignal Cable Kitchen w/ Gas Stove, Refrigerator, Water Dispenser and Rice Cooker Toilet and Bathroom in each room',
      price: ' ₱12000',
      image: 'assets/images/Crystal.jpg',
      code: 'CL1'
    }
  ];

  form = {
    answer: ''
  };

  text = 'NOTHING';

  book(){

    if(this.form.answer == 'MY1'){
      console.log('Minday');
      this.router.navigate(['my1']);
      this.text='Changed!';
    } else if(this.form.answer == 'BO1'){
      console.log('Brando');
      this.router.navigate(['bo1']);
    }else if(this.form.answer == 'MO12'){
      console.log('Mhyko 1 & 2!');
      this.router.navigate(['mo12']);
    }else if(this.form.answer == 'MO3'){
      console.log('Mhyko 3');
      this.router.navigate(['mo3']);
    }else if(this.form.answer == 'ME1'){
      console.log('Mauie');
      this.router.navigate(['me1']);
    }else if(this.form.answer == 'KA1'){
      console.log('Karla');
      this.router.navigate(['ka1']);
    }else if(this.form.answer == 'KN1'){
      console.log('Kerwin');
      this.router.navigate(['kn1']);
    }else if(this.form.answer == 'DA1'){
      console.log('Dara');
      this.router.navigate(['da1']);
    }else if(this.form.answer == 'KLUP'){
      console.log('KL-UP');
      this.router.navigate(['klup']);
    }else if(this.form.answer == 'KLDOWN'){
      console.log('KL-DOWN');
      this.router.navigate(['kldown']);
    }else if(this.form.answer == 'CL1'){
      console.log('Crystal');
      this.router.navigate(['cl1']);
    }else {
      this.router.navigate(['cotteges']);
    }

  }

}
