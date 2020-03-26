import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manufactura',
  templateUrl: './manufactura.component.html',
  styleUrls: ['./manufactura.component.css']
})
export class ManufacturaComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:quotemark
  HTML_FOOTER_TITLE: string = "<span  class='d-lg-none font-32'>¿Quieres conocer nuestra red de fábricas?</span>" +
  // tslint:disable-next-line:quotemark
  "<span class='d-none d-lg-block'>¿Quieres conocer nuestra <br><div class='space-30'></div>red de fábricas?</span>";
  // ¿Quieres conocer nuestra <br class='d-none d-lg-block'><div class='space-30'></div>red de fábricas?
  constructor() { }

  ngOnInit(): void {
  }

}
