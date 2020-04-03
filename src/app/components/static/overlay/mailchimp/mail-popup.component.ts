import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mail-popup',
  templateUrl: './mail-popup.component.html',
  styleUrls: ['./mail-popup.component.css']
})
export class MailPopupComponent implements OnInit {
  public EMAIL: string = '';
  public loading: boolean = false;
  constructor(public bottomSheetRef: MatBottomSheetRef<MailPopupComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
                this.EMAIL = this.data.EMAIL;
              }

  ngOnInit(): void {
  }
  // Envia los datos completos para el formulario original del newsletter y asi hacer la suscripción
  GetNameToMailchimp(mailchimpSuscriptor: NgForm): void {
    if (mailchimpSuscriptor.invalid) {
      alert('Hemos detectado un error, por favor inténtalo más tarde');
      this.bottomSheetRef.dismiss(null);
      throw new Error('Formulario inválido');
    }
    this.loading = false;
    this.bottomSheetRef.dismiss({
      FNAME: mailchimpSuscriptor.value.FNAME,
      LNAME: mailchimpSuscriptor.value.LNAME,
      EMAIL: this.EMAIL
    });
  }

}
