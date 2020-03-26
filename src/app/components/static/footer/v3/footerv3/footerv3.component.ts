import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footerv3',
  templateUrl: './footerv3.component.html',
  styleUrls: ['./footerv3.component.css']
})
export class Footerv3Component implements OnInit {

  // Title for footer
  @Input() titleFooter: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
