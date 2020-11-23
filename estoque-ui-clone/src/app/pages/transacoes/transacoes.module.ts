import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransacoesComponent } from './transacoes.component';

import { SharedModule } from '../../modules/shared/shared.module';
import { CardModule } from '../../components';

@NgModule({
	imports: [CommonModule, SharedModule, CardModule],
	declarations: [TransacoesComponent],
	exports: [TransacoesComponent],
})
export class TransacoesModule {}
