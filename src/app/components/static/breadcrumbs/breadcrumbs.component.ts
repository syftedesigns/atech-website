import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  tags: any;
  constructor(private router: Router) {
    this.getRouteData();
  }

  ngOnInit(): void {
  }
  getRouteData() {
      /*this.route.events.subscribe (
      (response: any) => console.log(response));*/
      this.router.events.pipe(
        filter(  target => target instanceof ActivationEnd ),
        filter(  (target: ActivationEnd) => target.snapshot.firstChild === null),
        map( (target: ActivationEnd) => {
          return target.snapshot.data;
        })
      ).subscribe(
        (resp: any) => {
          this.tags = resp;
        }
      );
  }
}
