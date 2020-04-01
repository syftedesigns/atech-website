import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Map } from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public popupBuenosAires: boolean = false;
  public atechMap: Map;
  constructor(private device: DeviceDetectorService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      // Verificamos si se un celular para hacer el zoom out
      if (this.device.isMobile()) {
        this.atechMap.flyTo({
          center: [-58.381592, -34.603722],
          zoom: 1
        });
      }
    }, 3000);
  }
  TogglePopups() {
    alert('hola mundo');
  }
// stack
// https://stackoverflow.com/questions/56088473/ngx-mapbox-gl-button-click-event-inside-a-popup-is-not-triggered/56088869#56088869
}
