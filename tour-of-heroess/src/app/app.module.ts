import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { FormsModule } from "@angular/forms";
import { HeroDetailComponent } from "./views/hero-detail/hero-detail.component";
import { HeroesComponent } from "./views/heroes/heroes.component";
import { MessagesComponent } from "./components/messages/messages.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/in-memory-data.service";
import { HeroSearchComponent } from "./components/hero-search/hero-search.component";

@NgModule({
	declarations: [
		AppComponent,
		HeroesComponent,
		HeroDetailComponent,
		MessagesComponent,
		DashboardComponent,
		HeroSearchComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
			dataEncapsulation: false,
		}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
