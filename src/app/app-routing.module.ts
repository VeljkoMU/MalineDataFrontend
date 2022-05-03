import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DodajComponent } from './components/dodaj/dodaj.component';
import { GeneralnaComponent } from './components/generalna/generalna.component';
import { IzvozComponent } from './components/izvoz/izvoz.component';
import { KorisniciComponent } from './components/korisnici/korisnici.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [

  {
    path:"generalno",
    component: GeneralnaComponent
  },
  {
    path:"korisnikpretraga",
    component: KorisniciComponent
  },
  {
    path: "dodaj",
    component: DodajComponent
  },
  {
    path: "izvoz",
    component: IzvozComponent
  },
  {
    path: "**",
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
