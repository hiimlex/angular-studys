import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuListRoutingModule } from './menu-list-routing.module';

import { MenuListComponent } from './menu-list.component';

import { SharedModule } from '../../modules/shared/shared.module';

@NgModule({
	imports: [CommonModule, MenuListRoutingModule, SharedModule],
	declarations: [MenuListComponent],
	exports: [MenuListComponent],
})
export class MenuListModule {}
