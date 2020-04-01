import { Component, OnInit, HostListener, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { MenuService } from '../../../services/menu/menu.service';
import { DeviceDetectorService } from 'ngx-device-detector';

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
  public stickyMobile: boolean = false;
  @ViewChild('stickyMenu') stickyMenu: ElementRef;


  constructor(public parentMenu: MenuService, public device: DeviceDetectorService) { }

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
  ngOnInit(): void {
    if (this.device.isMobile()) {
      this.EventMobileScroll();
    }
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
  EventMobileScroll() {
        // Initial state
    let scrollPos = 0;
    // adding scroll event
    window.addEventListener('scroll', (e) => {
      // detects new state and compares it with the new one
      if ((document.body.getBoundingClientRect()).top > scrollPos) {
        this.stickyMobile = false; // up
      } else {
        this.stickyMobile = true; // down
      }
      scrollPos = (document.body.getBoundingClientRect()).top;
    });
  }
}
