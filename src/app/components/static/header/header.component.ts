import { Component, OnInit, HostListener, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MenuService } from '../../../services/menu/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  // Sticky menu
  public sticky: boolean = false;
  public MenuPosition: number;
  public SticketBubble: boolean = false;
  @ViewChild('stickyMenu') stickyMenu: ElementRef;

  // Evento que determinará si hace scrolling
  @HostListener('window:scroll', ['$event']) scrolling() {
    const windowScroll = window.pageYOffset;
    if (windowScroll > this.MenuPosition) {
      this.sticky = true;
      this.SticketBubble = true;
    } else {
      this.sticky = false;
      this.SticketBubble = false;
    }
  }
  constructor(public parentMenu: MenuService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
   this.MenuPosition = this.stickyMenu.nativeElement.offsetTop;
  }
  // Disparador del menu
  ToggleMenu(isFromBubbleEvent?: boolean): void {
    if (isFromBubbleEvent) {
      this.SticketBubble = false;
    }
    this.parentMenu.OpenNav('myNav');
  }
  HideMenu(): void {
    this.parentMenu.CloseNav('myNav');
  }
  EventsBeforeNavigation() {
    this.parentMenu.ScrollTOP();
    this.parentMenu.CloseNav('myNav');
  }
}
