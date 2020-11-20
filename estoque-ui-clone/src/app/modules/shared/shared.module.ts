import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
	imports: [
		CommonModule,
		NzSpaceModule,
		NzToolTipModule,
		NzDividerModule,
		NzAvatarModule,
		NzDropDownModule,
		NzBreadCrumbModule,
		NzLayoutModule,
		NzMenuModule,
		NzCardModule,
		NzIconModule,
		NzButtonModule,
		NzGridModule,
	],
	exports: [
		NzSpaceModule,
		NzToolTipModule,
		NzDividerModule,
		NzAvatarModule,
		NzDropDownModule,
		NzBreadCrumbModule,
		NzLayoutModule,
		NzMenuModule,
		NzTypographyModule,
		NzCardModule,
		NzIconModule,
		NzButtonModule,
		NzGridModule,
	],
})
export class SharedModule {}
