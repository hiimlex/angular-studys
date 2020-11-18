import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-filho',
	templateUrl: './filho.component.html',
	styleUrls: ['./filho.component.css'],
})
export class FilhoComponent implements OnInit {
	@Input() recebeFamilia;
	@Output() respostaFamilia = new EventEmitter();

	constructor() {}

	ngOnInit(): void {
		console.log(this.recebeFamilia);
		console.log(
			'Objeto familia recebido do component pai via Input: ',
			this.recebeFamilia
		);
	}

	feedback() {
		this.respostaFamilia.emit({
			nome: 'Raphaella',
			sobreNome: 'Souza',
		});
	}
}
