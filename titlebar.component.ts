import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated'


@Component({
	selector: '<title-bar></title-bar>',
	templateUrl: 'app/titlebar.component.html',
	styleUrls: ['app/titlebar.component.css'],
	directives: [ROUTER_DIRECTIVES]
})

export class TitleBarComponent {
	isLoading = false;
	link1extend = false;
	link2extend = false;
	link3extend = false;

	transition() {
		this.isLoading = !this.isLoading;
	}

	extend1() {
		this.link1extend = !this.link1extend;
	}

	extend2() {
		this.link2extend = !this.link2extend;
	}

	extend3() {
		this.link3extend = !this.link3extend;
	}
	
}