import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public popupBuenosAires: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  TogglePopups() {
    alert('hola mundo');
  }
// stack
// https://stackoverflow.com/questions/56088473/ngx-mapbox-gl-button-click-event-inside-a-popup-is-not-triggered/56088869#56088869
}
