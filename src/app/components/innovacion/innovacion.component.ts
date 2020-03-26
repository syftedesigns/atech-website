import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-innovacion',
  templateUrl: './innovacion.component.html',
  styleUrls: ['./innovacion.component.css']
})
export class InnovacionComponent implements OnInit {

  constructor() { }
  // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:quotemark
  HTML_FOOTER_TITLE: string = "<span  class='d-lg-none font-32'>¿Quieres conocer más sobre nuestras innovaciones?</span>" +
  // tslint:disable-next-line:quotemark
  "<span class='d-none d-lg-block'>¿Quieres conocer más sobre <br><div class='space-30'></div>nuestras innovaciones?</span>";
  ngOnInit(): void {
  }

}
