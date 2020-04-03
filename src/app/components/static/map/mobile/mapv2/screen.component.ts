import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {
  public officeTitle: string = '';
  public officeSubtitle: string = '';
  public officeIco: string = '';

  constructor(public dialogRef: MatDialogRef<ScreenComponent>,
              @Inject(MAT_DIALOG_DATA) public dialogType: any) {
              }

  ngOnInit(): void {
    this.SetterCardValues();
  }

  SetterCardValues() {
    switch (this.dialogType) {
      case 'arg':
        this.officeTitle = 'Oficina Comercial';
        this.officeSubtitle = 'Bs.As., Argentina';
        this.officeIco = 'atech-oficina-comercial3';
        break;
      case 'spain':
        this.officeTitle = 'Dpto. de Innovación';
        this.officeSubtitle = 'Barcelona, España';
        this.officeIco = 'atech-departamento-de-innovacion';
        break;
      case 'ch':
        this.officeTitle = 'Casa Matriz';
        this.officeSubtitle = 'Shenzhen, China';
        this.officeIco = 'atech-casa-matriz';
        break;
    }
  }
}
