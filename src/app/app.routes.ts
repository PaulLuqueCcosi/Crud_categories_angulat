import { RouterModule, Routes } from '@angular/router';
import { OficiosDashboardComponent } from './oficios-dashboard/oficios-dashboard.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriasDashboardComponent } from './categorias-dashboard/categorias-dashboard.component';
import { UsuariosDashboardComponent } from './usuarios-dashboard/usuarios-dashboard.component';
export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'oficios-dashboard', component: OficiosDashboardComponent },
  { path: 'categorias-dashboard', component: CategoriasDashboardComponent },
  { path: 'usuarios-dashboard', component: UsuariosDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
