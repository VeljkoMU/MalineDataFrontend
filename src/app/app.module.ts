import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { GeneralnaComponent } from './components/generalna/generalna.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { KorisniciComponent } from './components/korisnici/korisnici.component';
import { DodajComponent } from './components/dodaj/dodaj.component';
import { IzvozComponent } from './components/izvoz/izvoz.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPrinterModule } from 'ngx-printer';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GeneralnaComponent,
    TableRowComponent,
    KorisniciComponent,
    DodajComponent,
    IzvozComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    NgxPrinterModule.forRoot({printOpenWindow: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
