import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component'; //STEP 1
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [ //Routes tells the Router which view to display when a user clicks a link or pastes a URL into the browser
  { path: 'heroes', component: HeroesComponent }, //path: a string that matches the URL. component: component the router should create
  //above will create HeroesComponent when URL is something like localhost:4200/heroes
  { path: 'dashboard', component: DashboardComponent }, //STEP 2
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //If URL has no extra path '/', then redirect to /dashboard. But must fully match the path which is empty path
  { path: 'detail/:id', component: HeroDetailComponent }, // colon ':' character in the path indicated :id is a placeholder for a specific hero id

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
