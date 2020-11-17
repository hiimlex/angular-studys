import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { CardMediaComponent } from './components/card-media/card-media.component';
import { NavbarComponent } from './components/navbar/navbar.component';

registerLocaleData(pt);

@NgModule({
	declarations: [AppComponent, NavbarComponent, CardMediaComponent],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		NzLayoutModule,
		NzTypographyModule,
		NzGridModule,
		NzButtonModule,
		NzCardModule,
		NzIconModule,
	],
	providers: [{ provide: NZ_I18N, useValue: pt_BR }],
	bootstrap: [AppComponent],
})
export class AppModule {}
