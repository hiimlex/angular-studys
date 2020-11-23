import { Component, Input } from '@angular/core';
import { Card } from '../../card';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent {
	@Input() card: Card;
	@Input() positionTooltip: string;
	@Input() route: string;
	@Input() routeExtra: string;

	constructor() {}
}
