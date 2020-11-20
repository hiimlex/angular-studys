import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';

import { CommonModule, registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';

import { SharedModule } from './modules/shared/shared.module';
import { MenuListModule } from './pages/menu-list/menu-list.module';

registerLocaleData(pt);

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		IconsProviderModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		RouterModule,
		SharedModule,
		MenuListModule,
	],
	providers: [{ provide: NZ_I18N, useValue: pt_BR }],
	bootstrap: [AppComponent],
	exports: [CommonModule],
})
export class AppModule {}
