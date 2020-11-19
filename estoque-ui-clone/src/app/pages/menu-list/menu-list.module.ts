import { NgModule } from '@angular/core';

import { MenuListRoutingModule } from './menu-list-routing.module';

import { MenuListComponent } from './menu-list.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
	imports: [MenuListRoutingModule, NzTypographyModule],
	declarations: [MenuListComponent],
	exports: [MenuListComponent],
})
export class MenuListModule {}
