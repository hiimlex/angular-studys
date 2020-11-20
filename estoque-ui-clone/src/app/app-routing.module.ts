import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrasacoesComponent } from './pages/trasacoes/trasacoes.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/estoque/home' },
	{
		path: 'estoque/home',
		loadChildren: () =>
			import('./pages/menu-list/menu-list.module').then(
				(m) => m.MenuListModule
			),
	},
	{ path: 'estoque/transacoes', component: TrasacoesComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
