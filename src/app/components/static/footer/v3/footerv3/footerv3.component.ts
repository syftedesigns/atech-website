import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../../../../../services/contact/contact.service';
import { NgForm } from '@angular/forms';
import { AtechClientContact } from 'src/app/classes/client.class';
import { MenuService } from '../../../../../services/menu/menu.service';

@Component({
  selector: 'app-footerv3',
  templateUrl: './footerv3.component.html',
  styleUrls: ['./footerv3.component.css']
})
export class Footerv3Component implements OnInit {

  // Title for footer
  @Input() titleFooter: string = '';
  loading: boolean = false;
  constructor(private contact: ContactService, public menu: MenuService) { }

  ngOnInit(): void {
  }
  SendAtechForm(valueFormTicket: NgForm): void {
    if (valueFormTicket.invalid) {
      this.contact.openSnackBar('Ha ocurrido un error, por favor inténtalo nuevamente', 'red-snackbar');
      throw new Error('Formulario inválido');
    }
    this.loading = true;
    const atechTicket = new AtechClientContact(valueFormTicket.value.firstname, valueFormTicket.value.lastname,
      valueFormTicket.value.country, valueFormTicket.value.email, valueFormTicket.value.company || '',
      valueFormTicket.value.phone || '', valueFormTicket.value.interestOn || '');
    console.log(atechTicket);
    this.contact.ContactAtechJG(atechTicket, 'contactHome')
      .subscribe((resp: any): void => {
        if (resp.status) {
          this.contact.openSnackBar('Tu mensaje ha sido enviado, nos pondremos en contácto contigo pronto!', 'success-snackbar');
          valueFormTicket.reset();
          this.loading = false;
        } else {
          this.contact.openSnackBar('No hemos podido enviar tu mensaje, inténtalo más tarde', 'red-snackbar');
          valueFormTicket.reset();
          this.loading = false;
        }
      });
  }

}
