import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import { NgxPrinterService } from 'ngx-printer';
import { Korisnik } from 'src/app/models/korisnik';
import { stavka } from 'src/app/models/stavka';
import { CenaService } from 'src/app/services/cena.service';
import { DataService } from 'src/app/services/data.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-korisnici',
  templateUrl: './korisnici.component.html',
  styleUrls: ['./korisnici.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class KorisniciComponent implements OnInit {

  public selected:Korisnik|undefined = undefined;

  public korisnici: Korisnik[] = [];

  public stavke:stavka[]=[];

  public stavka:stavka={
    id: 0,
    date: "",
    o: 0,
    k: 0,
    ko: 0,
    cenaO: this.cService.cenaO,
    cenaK: this.cService.cenaK,
    cenaKo: this.cService.cenaKo,
    gajbeInZ: 0,
    gajbeOutZ: 0,
    gajbeInP: 0,
    gajbeOutP: 0,
    gajbeInC: 0,
    gajbeOutC: 0,
    profitO:0,
    profitK:0,
    profitKo:0,
    profitU:0,
    isplaceno: 0
  };

  public zarada: number = 0;
  public isplata: number = 0;
  public razlika: number = 0;

  constructor(private data: DataService,
              public uiService: UiService,
              private cdRef: ChangeDetectorRef,
              private cService: CenaService,
              private printer: NgxPrinterService) { }

  ngOnInit(): void {
    this.data.getKorisnik().subscribe((data: any)=>{
      data.forEach((el:any)=>{
        this.korisnici.push({
          id: el[0],
          ime: el[1],
          gajbe: el[2],
          mesto: el[3],
          jmbg: el[4],
          gaz: el[6],
          ziro: el[5]
        });
      });
       console.log(this.korisnici)});
       this.korisnici = this.korisnici;
       this.cdRef.detectChanges();
       setTimeout(() => {
          console.log(this.korisnici);
       }, 5000);
  }

  public select(){
    this.data.getKorisnici(this.selected?.id??0).subscribe((data:any)=>{
      console.log(data);
      this.stavke = [];
      data.forEach((el:any)=>{
        this.stavke.push({
          id: el[0],
          date: el[1],
          o: el[2],
          k: el[3],
          ko: el[4],
          gajbeInZ: el[5],
          gajbeOutZ: el[6],
          gajbeInP: el[7],
          gajbeOutP: el[8],
          gajbeInC: el[9],
          gajbeOutC: el[10],
          cenaO: el[11],
          cenaK: el[12],
          cenaKo: el[13],
          profitO: el[2] * el[11],
          profitK: el[3] * el[12],
          profitKo: el[4] * el[13],
          profitU: el[2] * el[11] + el[3] * el[12] + el[4] * el[13],
          isplaceno: el[14]
        });
      });
      this.stavke.forEach((el:any)=>{
        console.log(this.zarada);
       this.zarada += el.profitU;
       this.isplata += el.isplaceno;
      });
   
      this.razlika = this.zarada - this.isplata;
    });
    console.log(this.korisnici);
   // this.getSum();

  }

  public insert(){
  if(this.selected==undefined)
      return;
   this.data.enterStavka(this.stavka, this.selected?.id).subscribe(()=>{this.select();});
    console.log(this.stavka);
    console.log(this.selected);
  }

  public delete(){
    this.data.deleteKorisnik(this.selected?.id??0).subscribe(()=>{
      this.korisnici = this.korisnici.filter((el)=>el.id!= this.selected?.id);
      this.selected = undefined;
    })
  }

  public copyStavka(s: stavka){
    this.stavka = s;
  }

  public deleteStavka(id: number){
    this.data.deleteStavka(id).subscribe(()=>{
      this.stavke = this.stavke.filter((el)=>el.id!=id);
    })
  }

  public getSum(){
    this.data.sum(this.selected?.id??0).subscribe((data)=>{
      console.log(data);
    });
  }

  public stampaj(){
    this.printer.printPrintItem(this.printer.getPrintItem("print"));
  }

}
