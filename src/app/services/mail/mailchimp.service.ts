import { Injectable } from '@angular/core';
import { ContactService } from '../contact/contact.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { MailChimpSuscriptorClass } from 'src/app/classes/mailchimp';

@Injectable({
  providedIn: 'root'
})
export class MailchimpService {

  // tslint:disable-next-line:variable-name
  constructor(private contact: ContactService, private _http: HttpClient) { }

    // Genera un key unico para las peticiones de subscripción
    private randomString(): string {
      return new Date().valueOf().toString();
  }

    // Mailchimp JSONP
    SubscribeToMailChimpJSONP(suscription: MailChimpSuscriptorClass) {
      const params = new HttpParams()
      .set('EMAIL', suscription.email_address)
      .set('FNAME', suscription.merge_filds.FNAME)
      .set('LNAME', suscription.merge_filds.LNAME)
      .set('b_9b1f8ee1168f03c1c6cd9c867_e520e1576b', '');
      // Lo que hacemos es el formulario generado de forma automatica en mailchimp lo aplicamos aca pero con JSONP
      let url = 'https://syftedesigns.us4.list-manage.com/subscribe/post-json?u=9b1f8ee1168f03c1c6cd9c867&amp;id=e520e1576b&';
      url += params.toString();
      return this._http.jsonp(url, 'c').pipe(
        map((resp: any) => {
          return resp;
        }),
        catchError( (err: any)  => {
          console.error(err);
          this.contact.openSnackBar('Ops! Tenemos problemas para procesar su información. Por favor inténtelo de nuevo', 'red-snackbar');
          return new Observable<string | boolean>();
        })
      );
    }
}
