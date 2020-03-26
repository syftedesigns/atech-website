import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
// tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:quotemark
  HTML_FOOTER_TITLE: string = "<span  class='d-lg-none font-32'>¿¡Hola! ¿Quieres que uno de nuestros asesores" +
  // tslint:disable-next-line:quotemark
  "se comunique contigo o te enviemos nuestro catálogo?</span>" +
  // tslint:disable-next-line:quotemark
  "<span class='d-none d-lg-block'>¡Hola! <br><div class='space-30'></div> " +
  // tslint:disable-next-line:quotemark
  "¿Quieres que uno de nuestros <br><div class='space-30'></div>" +
  // tslint:disable-next-line:quotemark
  "asesores se comunique contigo o te <br>" +
  // tslint:disable-next-line:quotemark
  "<br>enviemos nuestro catálogo?</span>";
  constructor() { }

  ngOnInit(): void {
  }

}
