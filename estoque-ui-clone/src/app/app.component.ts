import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	isCollapsed = true;

	constructor() {
		console.log(this.isCollapsed);
	}

	handleCollapse() {
		console.log(this.isCollapsed);
		this.isCollapsed = !this.isCollapsed;
	}

	ngOnInit() {
		setTimeout(() => {
			this.isCollapsed = false;
		});
	}
}
