import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { DirectionComponent } from './home/direction/direction.component';
import { InspiratorComponent } from './home/inspirator/inspirator.component';
import { PlDGraphicsComponent } from './home/pl-d-graphics/pl-d-graphics.component';
import { GreenBookComponent } from './home/green-book/green-book.component';
import { PicturesColumnComponent } from './shared/pictures-column/pictures-column.component';
import { ChopinComponent } from './home/chopin/chopin.component';
import { CzeresnieComponent } from './home/czeresnie/czeresnie.component';
import { BorderlessComponent } from './home/borderless/borderless.component';
import { KsiazkaComponent } from './home/ksiazka/ksiazka.component';
import { PanskaComponent } from './home/panska/panska.component';
import { KalendarzComponent } from './home/kalendarz/kalendarz.component';
import { PrzemocComponent } from './home/przemoc/przemoc.component';
import { MyMentalComponent } from './my-mental/my-mental.component';
import { BeesComponent } from './home/bees/bees.component';
import { RadarComponent } from './home/radar/radar.component';
import { BrunoComponent } from './home/bruno/bruno.component';

// Factory function required during AOT compilation
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    DirectionComponent,
    InspiratorComponent,
    PlDGraphicsComponent,
    GreenBookComponent,
    PicturesColumnComponent,
    ChopinComponent,
    CzeresnieComponent,
    BorderlessComponent,
    KsiazkaComponent,
    PanskaComponent,
    KalendarzComponent,
    PrzemocComponent,
    MyMentalComponent,
    BeesComponent,
    RadarComponent,
    BrunoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


