import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuListRoutingModule } from './menu-list-routing.module';

import { MenuListComponent } from './menu-list.component';
import { SharedModule } from '../../modules/shared/shared.module';
import { CardModule } from '../../components/card/card.module';

@NgModule({
	imports: [CommonModule, MenuListRoutingModule, SharedModule, CardModule],
	declarations: [MenuListComponent],
	exports: [MenuListComponent],
})
export class MenuListModule {}
