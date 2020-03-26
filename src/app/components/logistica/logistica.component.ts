import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logistica',
  templateUrl: './logistica.component.html',
  styleUrls: ['./logistica.component.css']
})
export class LogisticaComponent implements OnInit {

  constructor() { }
  // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:quotemark
  HTML_FOOTER_TITLE: string = "<span  class='d-lg-none font-32'>¿Interesado en nuestro servicio de logística?</span>" +
  // tslint:disable-next-line:quotemark
  "<span class='d-none d-lg-block'>¿Interesado en nuestro <br><div class='space-30'></div>servicio de logística?</span>";
  ngOnInit(): void {
  }

}
