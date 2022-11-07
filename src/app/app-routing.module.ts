import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CheckersListComponent} from './components/checkers-list/checkers-list.component';
import {AuthGuard} from '../app/services/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'checkers', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'checkers', component: CheckersListComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


