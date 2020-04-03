import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AtechClientContact } from '../../classes/client.class';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient, private snackbar: MatSnackBar) { }
    // Contact Form
    ContactAtechJG(ticket: AtechClientContact, urlToSend?: string) {
      const url = `./sendgrid/${urlToSend}.php`;
      const form = new FormData();
      form.append('name', ticket.name);
      form.append('lastname', ticket.lastname);
      form.append('country', ticket.country);
      form.append('email', ticket.email);
      form.append('company', ticket.company);
      form.append('phone', ticket.phone);
      return this._http.post(url, form).pipe(
        map((resp: any) => {
          return resp;
        }),
        catchError( (err: any)  => {
          console.error(err);
          this.snackbar.open('Ops! no pudimos procesar tu información, por favor inténtalo nuevamente', null, {
            duration: 5000,
            panelClass: ['red-snackbar']
          });
          return new Observable<string | boolean>();
        })
      );
    }
    openSnackBar(msg: string, msgclass?: string): void {
        this.snackbar.open(msg, null, {
          duration: 5000,
          panelClass: [msgclass || '']
        });
    }
}
