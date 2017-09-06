import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, Route, RouterModule } from '@angular/router';

import { DrinksComponent } from './dishes/drinks/drinks.component';
import { DessertsComponent } from './dishes/desserts/desserts.component';
import { DishesComponent } from './dishes/soups/soups.component';
import { EntreeComponent } from './dishes/entree/entree.component';
import { SaladsComponent } from './dishes/salads/salads.component';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';

import { NavbarComponent } from './navbar/navbar.component';
import { routes } from './routes';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { PromotionsComponent } from './body/promotions/promotions.component';
import { CarouselComponent } from './body/promotions/carousel/carousel.component';
import { ContactComponent } from './body/contact/contact.component';
import { MapGoogleComponent } from './body/contact/map-google/map-google.component';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { OrdersService } from './orders.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    DishesComponent,
    EntreeComponent,
    SaladsComponent,
    DessertsComponent,
    DrinksComponent,
    PromotionsComponent,
    CarouselComponent,
    ContactComponent,
    MapGoogleComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBksWqtZWIlkSYLTamQU4pnqEI-YqJG2Zk'
    }),
    HttpModule
  ],
  providers: [
    OrdersService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
