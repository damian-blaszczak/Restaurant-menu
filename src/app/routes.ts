import { Routes } from '@angular/router';
import { DrinksComponent } from './dishes/drinks/drinks.component';
import { DessertsComponent } from './dishes/desserts/desserts.component';
import { DishesComponent } from './dishes/soups/soups.component';
import { EntreeComponent } from './dishes/entree/entree.component';
import { SaladsComponent } from './dishes/salads/salads.component';
import { PromotionsComponent } from './body/promotions/promotions.component';
import { ContactComponent } from './body/contact/contact.component';

export const routes: Routes = [
  {
    path: 'entree',
    component: EntreeComponent
  },
  {
    path: 'soups',
    component: DishesComponent
  },
  {
    path: 'salads',
    component: SaladsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: PromotionsComponent
  },
  {
    path: 'desserts',
    component: DessertsComponent
  },
  {
    path: 'drinks',
    component: DrinksComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
