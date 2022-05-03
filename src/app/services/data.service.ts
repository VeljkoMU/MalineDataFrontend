import { HttpClient } from '@angular/common/http';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { Korisnik } from '../models/korisnik';
import { stavka } from '../models/stavka';
import { CenaService } from './cena.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient,
              private c: CenaService) { }

  public getGeneral(){
    // Vracas stavke po datutima, za svaki datum u nizu kg za tresnje, profit za tresnje gajbe in i gajbe out
    return this.httpClient.get("http://localhost:5000/sortedDataEntry");
  }

  public getIzvoz(){
    return this.httpClient.get("http://localhost:5000/allExport");
  }

  public getKorisnik(){
    // Saljem ti ime, ti vracas (za sve sa tim imenom), 
    return this.httpClient.get("http://localhost:5000/allUsers");
  }

  public deleteKorisnik(id: number){
    return this.httpClient.delete(`http://localhost:5000/deleteUser?id_user=${id}`);
  }
  public getKorisnici(id: number){
    return this.httpClient.get(`http://localhost:5000/userEntry?id_user=${id}`);
  }

  public getGajbe(){
    // Vracas stanje gajbi
    return this.httpClient.get("http://localhost:5000/allCrate");
  }

  public updateGajbe(z:number,zt:number,c:number,ct:number,p:number,pt:number){
    return this.httpClient.put("http://localhost:5000/updataCrate", {
      dostupneZ: z, 
      iznajmljene: zt,
      c: c,
      ct: ct,
      p:p,
      pt:pt
    });
  }

  public enterStavka(stavka: stavka, korisnik:number){
    //Insert ili update
    if(stavka.o==0 && stavka.k==0 && stavka.ko==0){
      return this.httpClient.post("http://localhost:5000/addEntry", {
        date: stavka.date,
        korisnik: korisnik,
        cenaO: this.c.cenaO,
        cenaK: this.c.cenaK,
        cenaKo: this.c.cenaKo,
        gajbeInC: stavka.gajbeInC,
        gajbeInZ: stavka.gajbeInZ,
        gajbeInP: stavka.gajbeInP,
        gajbeOutP: stavka.gajbeOutP,
        gajbeOutZ: stavka.gajbeOutZ,
        gajbeOutC: stavka.gajbeOutC,
        organske: stavka.o,
        komercijalne: stavka.ko,
        kontrolisane: stavka.k,
        isplaceno: stavka.isplaceno
      });
    }
    else{
    return this.httpClient.post("http://localhost:5000/addEntry", {
      date: stavka.date,
      korisnik: korisnik,
      cenaO: this.c.cenaO,
      cenaK: this.c.cenaK,
      cenaKo: this.c.cenaKo,
      gajbeInC: stavka.gajbeInC,
      gajbeInZ: stavka.gajbeInZ,
      gajbeInP: stavka.gajbeInP,
      gajbeOutP: stavka.gajbeOutP,
      gajbeOutZ: stavka.gajbeOutZ,
      gajbeOutC: stavka.gajbeOutC,
      organske: stavka.o - 0.4 * stavka.gajbeInP,
      komercijalne: stavka.ko - 0.4 * stavka.gajbeInZ,
      kontrolisane: stavka.k - 0.4 * stavka.gajbeInC,
      isplaceno: stavka.isplaceno
    });
  }
  }

  public deleteStavka(id:number){
    return this.httpClient.delete(`http://localhost:5000/deleteEntry?id_entry=${id}`);
  }

  public insertKorisnit(korisnik: Korisnik){
      return this.httpClient.post("http://localhost:5000/addUser", {
        name: korisnik.ime,
        cretes: 0,
        place: korisnik.mesto,
        jmbg: korisnik.jmbg,
        account: korisnik.ziro,
        farm_num: korisnik.gaz
      });
  }

  public getUkupnoUvoz(){
    return this.httpClient.get("http://localhost:5000/sumEntry");
  }
  public getUkupnoIzvoz(){
    return this.httpClient.get("http://localhost:5000/sumExport");
  }

  public enterIzvoz(stavka: stavka){
    return this.httpClient.post("http://localhost:5000/addExport",{
      date:stavka.date,
      kom: stavka.ko - 0.4 * stavka.gajbeInZ,
      org: stavka.o - 0.4 * stavka.gajbeInP,
      kont: stavka.k - 0.4 * stavka.gajbeInC,
      cKom: this.c.cenaKo,
      cKont: this.c.cenaK,
      cOrg: this.c.cenaO,
      p: stavka.gajbeOutP,
      z: stavka.gajbeOutZ,
      c: stavka.gajbeOutC
    });
  }

  public deleteIzvoz(id: number){
    return this.httpClient.delete(`http://localhost:5000/deleteExport?id_export=${id}`);
  }

  public sum(id:number){
    return this.httpClient.get("http://localhost:5000/everSubstraction");
  }
}
