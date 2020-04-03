import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScreenComponent } from './screen.component';

@Component({
  selector: 'app-mapv2',
  templateUrl: './mapv2.component.html',
  styleUrls: ['./mapv2.component.css']
})
export class Mapv2Component implements OnInit {
  constructor(private dialogMap: MatDialog) { }
  renderMapAuto: string = '0';
  ngOnInit(): void {
    this.renderMapAuto = screen.width.toString();
    console.log(this.renderMapAuto);
  }

  OpenAtechCard(mapCardType: string): void {
    this.dialogMap.open(ScreenComponent, {
      data: mapCardType,
      autoFocus: false,
      position: {
        bottom: '80px',
      },
    });
  }

}
