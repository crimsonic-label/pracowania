import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DirectionComponent } from './home/direction/direction.component';
import { InspiratorComponent } from './home/inspirator/inspirator.component';


const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "home", component: HomeComponent },
  {path: "contact", component: ContactComponent },
  {path: "direction", component: DirectionComponent },
  {path: "inspirator", component: InspiratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
