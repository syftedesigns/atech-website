import { Injectable } from '@angular/core';
import * as $ from 'jquery';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  // Identificamos si un menu esta abierto
  public menuIsOpen: boolean = false;
  constructor() { }

  OpenNav(idMenu: string): void {
    // Verificamos si ya cargo todo el DOM, para que lance el menu
    console.log('Abrio el menu');
    this.menuIsOpen = true;
    $(document).ready(() => {
      // Cargo
      $(`#${idMenu}`).attr('style', 'height: 80%');
    });
  }

  CloseNav(idMenu: string): void {
    console.log('Cerro el menu');
    this.menuIsOpen = false;
    $(document).ready(() => {
      // Cargo
      $(`#${idMenu}`).attr('style', 'height: 0%');
    });
  }
  // Scroll top after navigate page
  ScrollTOP() {
    $('html, body').animate({ scrollTop: 0 }, 300);
  }
}
