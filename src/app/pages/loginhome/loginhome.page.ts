import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginhome',
  templateUrl: './loginhome.page.html',
  styleUrls: ['./loginhome.page.scss'],
})
export class LoginhomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    // autoplay: true,

  };

}
