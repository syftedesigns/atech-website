import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu/menu.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {

  constructor(public menu: MenuService) { }

  ngOnInit(): void {
  }

  EventsBeforeNavigation() {
    this.menu.ScrollTOP();
    this.menu.CloseNav('myNav');
  }
}
