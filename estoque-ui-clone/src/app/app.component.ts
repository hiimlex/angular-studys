import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	isCollapsed = true;

	constructor(private route: Router) {}

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
