import {Component,OnInit} from '@angular/core';
import {TitleBarComponent} from './titlebar.component';
import {ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated';
import {ApplyForPurchase} from './applyforpurchase.component';
import {HomeComponent} from './home.component';

@RouteConfig([
	{ path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
	{ path: '/purchase/specific-home', name: 'Applyforpurchase', component: ApplyForPurchase }
	

])
@Component({
    selector: 'my-app',
    template: `
		<title-bar></title-bar>
		<div class="container">
		<router-outlet></router-outlet>
		</div>

`,
	directives: [TitleBarComponent, ROUTER_DIRECTIVES, HomeComponent]
})
export class AppComponent {
	
}