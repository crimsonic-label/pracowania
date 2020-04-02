import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyMentalComponent } from './my-mental/my-mental.component';
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
import { PanskaComponent } from './home/panska/panska.component';
import { KalendarzComponent } from './home/kalendarz/kalendarz.component';
import { PrzemocComponent } from './home/przemoc/przemoc.component';


const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "my", component: MyMentalComponent },
  {path: "home", component: HomeComponent, data: {animation: 'home'} },
  {path: "contact", component: ContactComponent },
  {path: "direction", component: DirectionComponent, data: {animation: 'portfolio'} },
  {path: "inspirator", component: InspiratorComponent, data: {animation: 'portfolio'} },
  {path: "pldgraphics", component: PlDGraphicsComponent, data: {animation: 'portfolio'} },
  {path: "greenbook", component: GreenBookComponent, data: {animation: 'portfolio'} },
  {path: "chopin", component: ChopinComponent, data: {animation: 'portfolio'} },
  {path: "czeresnie", component: CzeresnieComponent, data: {animation: 'portfolio'} },
  {path: "borderless", component: BorderlessComponent, data: {animation: 'portfolio'} },
  {path: "ksiazka", component: KsiazkaComponent, data: {animation: 'portfolio'} },
  {path: "panska", component: PanskaComponent, data: {animation: 'portfolio'} },
  {path: "kalendarz", component: KalendarzComponent, data: {animation: 'portfolio'} },
  {path: "przemoc", component: PrzemocComponent, data: {animation: 'portfolio'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
