import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-pai',
	templateUrl: './pai.component.html',
	styleUrls: ['./pai.component.css'],
})
export class PaiComponent implements OnInit {
	familia: Object[];

	constructor() {
		this.familia = [
			{ nome: 'Vitor', sobreNome: 'Borges' },
			{ nome: 'Emerson', sobreNome: 'Daniel' },
			{ nome: 'Thiago', sobreNome: 'Contre!' },
		];
	}

	ngOnInit(): void {
		console.log(this.familia);
	}

	reciverFeedback(respostaFilho) {
		console.log(
			'Foi emitido o evento e chegou no pai >>>> ',
			respostaFilho
		);
	}
}
