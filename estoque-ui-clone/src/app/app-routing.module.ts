import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransacoesComponent } from './pages/transacoes';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/estoque/home' },
	{
		path: 'estoque/home',
		loadChildren: () =>
			import('./pages/menu-list/menu-list.module').then(
				(m) => m.MenuListModule
			),
	},
	{ path: 'estoque/transacoes', component: TransacoesComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
