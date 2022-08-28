import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Icon, icon, latLng, Marker, marker, tileLayer } from 'leaflet';

const iconDefault = icon({
    ...Icon.Default.prototype.options,
    iconUrl: 'assets/marker-icon.png',
    iconRetinaUrl: 'assets/marker-icon-2x.png',
    shadowUrl: 'assets/marker-shadow.png'
});
Marker.prototype.options.icon = iconDefault;

@Component({
    selector: 'app-map-overview',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnInit {
    public options = {
        layers: [
            tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 18,
                minZoom: 2,
                detectRetina: true,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            })
        ],
        zoom: 12,
        center: latLng(46.62, 8.0)
    };
    public markerClusterData: Marker[] = [];

    constructor() {}

    ngOnInit(): void {
        this.markerClusterData.push(
            marker([46.660556, 8.053611]).bindTooltip('First').openTooltip(),
            marker([46.65844, 8.06518]).bindTooltip('Schreckfeld').openTooltip()
        );
    }
}
