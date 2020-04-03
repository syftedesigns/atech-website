import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../../../services/contact/contact.service';
import { AtechClientContact } from '../../../classes/client.class';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  loading: boolean = false;
  checkInterest: string[] = [];
  constructor(private contact: ContactService) { }

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
      valueFormTicket.value.phone || '', JSON.stringify(this.checkInterest) || '');
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
  // Aca nos dará la información de los checkbox
  CheckboxInterestValue(e): void {
    if (e.checked) {
        this.checkInterest.push(e.source.ariaLabel);
    } else {
      // Aqui debe eliminarlo del array
      let i = 0;
      for (const iterator of this.checkInterest) {
        if (iterator === e.source.ariaLabel) {
          this.checkInterest.splice(i, 1);
        }
        i++;
      }
    }
    console.log(this.checkInterest);
  }

}
