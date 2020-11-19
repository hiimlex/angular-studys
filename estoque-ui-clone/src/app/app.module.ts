import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';

import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

registerLocaleData(pt);

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		IconsProviderModule,
		NzLayoutModule,
		NzMenuModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		NzSpaceModule,
		NzToolTipModule,
		NzDividerModule,
		NzAvatarModule,
		NzDropDownModule,
		NzBreadCrumbModule,
	],
	providers: [{ provide: NZ_I18N, useValue: pt_BR }],
	bootstrap: [AppComponent],
})
export class AppModule {}
