import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RuletaComponent } from './pages/ruleta/ruleta.component';

const routes: Routes = [

  { path: 'ruleta', component: RuletaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
