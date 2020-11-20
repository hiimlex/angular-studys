import { Component, OnInit } from '@angular/core';
import { Cards } from './mock-list-cards';

@Component({
	selector: 'app-menu-list',
	templateUrl: './menu-list.component.html',
	styleUrls: ['./menu-list.component.css'],
})
export class MenuListComponent implements OnInit {
	cards = Cards;

	constructor() {}

	ngOnInit() {}
}
