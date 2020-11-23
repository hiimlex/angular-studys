import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CardComponent } from './card.component';
import { SharedModule } from '../../modules/shared/shared.module';

@NgModule({
	imports: [CommonModule, SharedModule, RouterModule],
	declarations: [CardComponent],
	exports: [CardComponent],
})
export class CardModule {}
