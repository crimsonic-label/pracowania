import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DirectionComponent } from './home/direction/direction.component';
import { InspiratorComponent } from './home/inspirator/inspirator.component';
import { PlDGraphicsComponent } from './home/pl-d-graphics/pl-d-graphics.component';
import { GreenBookComponent } from './home/green-book/green-book.component';
import { ChopinComponent } from './home/chopin/chopin.component';
import { CzeresnieComponent } from './home/czeresnie/czeresnie.component';
import { BorderlessComponent } from './home/borderless/borderless.component';
import { KsiazkaComponent } from './home/ksiazka/ksiazka.component';


const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "home", component: HomeComponent },
  {path: "contact", component: ContactComponent },
  {path: "direction", component: DirectionComponent },
  {path: "inspirator", component: InspiratorComponent },
  {path: "pldgraphics", component: PlDGraphicsComponent },
  {path: "greenbook", component: GreenBookComponent },
  {path: "chopin", component: ChopinComponent },
  {path: "czeresnie", component: CzeresnieComponent },
  {path: "borderless", component: BorderlessComponent },
  {path: "ksiazka", component: KsiazkaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
