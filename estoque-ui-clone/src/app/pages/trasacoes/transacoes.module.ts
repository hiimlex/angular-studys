import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrasacoesComponent } from './trasacoes.component';

import { SharedModule } from '../../modules/shared/shared.module';

@NgModule({
	imports: [CommonModule, SharedModule],
	declarations: [TrasacoesComponent],
	exports: [TrasacoesComponent],
})
export class TransacoesModule {}
