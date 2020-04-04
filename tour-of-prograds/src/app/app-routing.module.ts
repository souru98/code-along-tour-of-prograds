import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProGradsComponent } from './pro-grads/pro-grads.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'prograds', component: ProGradsComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
