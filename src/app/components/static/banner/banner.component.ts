import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @ViewChild('arrowLeft') public imgArrow: ElementRef<any>;
  @ViewChild('arrowRight') public imgArrow2: ElementRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

  // CAMBIA el estilo de la flecha
  OnHover(e, arrowType: string): void {
    if (arrowType === 'left') {
      this.imgArrow.nativeElement.src = './assets/images/FlechaIZQHover.png';
      this.imgArrow.nativeElement.alt = 'arrow-left-active';
    } else {
      // Flecha derecha
      this.imgArrow2.nativeElement.src = './assets/images/FlechaDERHover.png';
      this.imgArrow2.nativeElement.alt = 'arrow-right-active';
    }
  }
  OnMouseLeave(e, arrowType: string): void {
    if (arrowType === 'left') {
      this.imgArrow.nativeElement.src = './assets/images/FlechaIzq.png';
      this.imgArrow.nativeElement.alt = 'arrow-left';
    } else {
      // Flecha derecha
      this.imgArrow2.nativeElement.src = './assets/images/FlechaDER.png';
      this.imgArrow.nativeElement.alt = 'arrow-left-right';
    }
  }
}
