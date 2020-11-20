import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransacoesComponent } from './transacoes.component';

import { SharedModule } from '../../modules/shared/shared.module';

@NgModule({
	imports: [CommonModule, SharedModule],
	declarations: [TransacoesComponent],
	exports: [TransacoesComponent],
})
export class TransacoesModule {}
