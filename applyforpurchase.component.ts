import {Component,OnInit} from '@angular/core';
import {ControlGroup, Control, FormBuilder, Validators} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {FormGroup} from '@angular/forms';
import {GoogleplaceDirective} from './googleplace.directive';



@Component({	
	templateUrl: 'app/applyforpurchase.html',
	styleUrls: ['app/applyforpurchase.css'],
	directives: [ROUTER_DIRECTIVES, GoogleplaceDirective],
}) 

export class ApplyForPurchase {
	form: ControlGroup;  
	model; 
	
	propertytypes = ["Single Family", "Townhouse", "Condo",
		"Cooperative", "2 to 4 units", "Multifamily (>4 units)",
		"PUD-Attached", "PUD-Detached", "High Rise Condo(>7 stories)",
		"Manufactored Mobile Home"];	
	nextattempt = false;
	touched = false;
	
	

	constructor(fb: FormBuilder) {
		this.form = fb.group({
			street: ['', Validators.required],
			aptunit: [],
			zipcode: ['', Validators.required],
			city: ['', Validators.required],
			state: ['', Validators.required],
			homevalue: [],
			propertyusage: [],
			propertytype: []
			 
		});
		console.log(this.form);
	}
	public street1;
    getAddress(place: Object) {
        this.street1 = place['formatted_address'];
        console.log("Address Object", place);
    }
	


	next(form) {
		this.nextattempt = true;
	}
	

}