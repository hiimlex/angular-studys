import { Component, OnInit } from '@angular/core';
import { Cards } from './mock-transações';

@Component({
	selector: 'app-transacoes',
	templateUrl: './transacoes.component.html',
	styleUrls: ['./transacoes.component.css'],
})
export class TransacoesComponent implements OnInit {
	cards = Cards;

	constructor() {}

	ngOnInit() {}
}
