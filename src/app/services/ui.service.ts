import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  public url:string = "";
  constructor(private router:Router) { }

  public gotoGeneral(){
    this.router.navigate(["generalno"]);
  }
  public gotoKorisnik(){
    this.router.navigate(["korisnikpretraga"]);
  }
  public gotoDodaj(){
    this.router.navigate(["dodaj"]);
  }
  public gotoIzvoz(){
    this.router.navigate(["izvoz"]);
  }
  public gotoMain(){
    this.router.navigate(["*"]);
  }
}
