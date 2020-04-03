import { Component, OnInit } from '@angular/core';
import { MailchimpService } from '../../../../../services/mail/mailchimp.service';
import { NgForm } from '@angular/forms';
import { ContactService } from '../../../../../services/contact/contact.service';
import { MailChimpSuscriptorClass } from '../../../../../classes/mailchimp';
import { MatBottomSheet} from '@angular/material/bottom-sheet';
import { MailPopupComponent } from '../../../overlay/mailchimp/mail-popup.component';
import { MenuService } from '../../../../../services/menu/menu.service';

@Component({
  selector: 'app-footerv2',
  templateUrl: './footerv2.component.html',
  styleUrls: ['./footerv2.component.css']
})
export class Footerv2Component implements OnInit {
  loading: boolean = false;
  constructor(private mailchimp: MailchimpService, private contact: ContactService,
              private bottomSheet: MatBottomSheet, public menu: MenuService) {
              }

  ngOnInit(): void {
  }

  MailchimpSuscription(suscriptor: NgForm): void {
    if (suscriptor.invalid) {
      this.contact.openSnackBar('Ha ocurrido un error, por favor, inténtalo más tarde', 'red-snackbar');
      throw new Error('Form invalid');
    }
    // Necesitamos el nombre y el apellido, asi que abrimos un popup atractivo
    this.bottomSheet.open(MailPopupComponent, {
      data: {
        EMAIL: suscriptor.value.email
      },
      disableClose: true
    }).afterDismissed().subscribe((resp: any) => {
      if (resp !== null ) {
        // Significa que no le dio a "Cancelar"
        const ObjectSuscription = new MailChimpSuscriptorClass(resp.EMAIL, 'subscribed', ['Suscriptores'], 'es_ES', {
          FNAME: resp.FNAME,
          LNAME: resp.LNAME
        });
        console.log(ObjectSuscription);
        this.mailchimp.SubscribeToMailChimpJSONP(ObjectSuscription)
          .subscribe((mailchimpRes: any) => {
            if (mailchimpRes.result === 'success') {
              this.contact.openSnackBar('Gracias por interesarte en nosotros!! :)', '');
              suscriptor.reset();
            } else {
              console.error(mailchimpRes);
              // tslint:disable-next-line:max-line-length
              this.contact.openSnackBar('Parece que ha habido un problema, por favor verifica que tu email sea válido o que ya no estes registrado con nosotros', 'red-snackbar');
              suscriptor.reset();
            }
          });
      } else {
        suscriptor.reset();
      }
    });
  }
}
