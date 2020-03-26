import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor(private pageTitle: Title, private route: Router) { }
  tags = {
    title: ''
  };
  ngOnInit(): void {
    this.SetPageTitle();
    console.log('hola mundo');
  }
  SetPageTitle() {
        /*this.route.events.subscribe (
      (response: any) => console.log(response));*/
      this.route.events.pipe(
        filter(  target => target instanceof ActivationEnd ),
        filter(  (target: ActivationEnd) => target.snapshot.firstChild === null),
        map( (target: ActivationEnd) => {
          return target.snapshot.data;
        })
      ).subscribe(
        (resp: any) => {
          this.tags = resp;
          this.pageTitle.setTitle('AtechJG | ' + resp.Title);
        }
      );
  }
}
