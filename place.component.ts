﻿import {Component} from '@angular/core';
import {GoogleplaceDirective} from './googleplace.directive';

@Component({
    selector: 'place',
    directives: [GoogleplaceDirective],
    template: `
	Type Location :
        <input type="text" [(ngModel)] = "address"  (setAddress) = "getAddress($event)" googleplace/>
        `
})
export class AppComponent {
    public address: Object;
    getAddress(place: Object) {
        this.address = place['formatted_address'];
        var location = place['geometry']['location'];
        var lat = location.lat();
        var lng = location.lng();
        console.log("Address Object", place);
    }
}
