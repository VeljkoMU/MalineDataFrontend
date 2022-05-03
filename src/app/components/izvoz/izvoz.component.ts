import { Component, OnInit } from '@angular/core';
import { NgxPrinterService } from 'ngx-printer';
import { stavka } from 'src/app/models/stavka';
import { CenaService } from 'src/app/services/cena.service';
import { DataService } from 'src/app/services/data.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-izvoz',
  templateUrl: './izvoz.component.html',
  styleUrls: ['./izvoz.component.css']
})
export class IzvozComponent implements OnInit {

  public stavke:stavka[] = [];

  public stavka: stavka = {
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

  constructor(private data: DataService,
              public uiService: UiService,
              private cService: CenaService,
              private printer: NgxPrinterService) { }

  ngOnInit(): void {
    this.data.getIzvoz().subscribe((data:any)=>{
      data.forEach((el:any)=>{
       this.stavke.push({
        id: el[7],
        date: el[0],
        cenaO: el[1],
        cenaK:el[2],
        cenaKo: el[3],
        o: el[4],
        k: el[5],
        ko: el[6],
        profitO: el[1]*el[4],
        profitK: el[2]*el[5],
        profitKo: el[3]*el[6],
        profitU: el[1]*el[4] + el[2]*el[5] + el[3]*el[6],
        isplaceno: 0,
        gajbeInC: 0,
        gajbeInP:0,
        gajbeInZ:0,
        gajbeOutC: el[10],
        gajbeOutP: el[8],
        gajbeOutZ: el[9]
       });
      });
      console.log(data)
    });

  }

  public inputIzvoz(){
    console.log(this.stavka);
    this.data.enterIzvoz(this.stavka).subscribe(()=>{
      this.stavke.push(this.stavka);
      this.data.updateGajbe(this.cService.gajbeZ-this.stavka.gajbeOutZ, this.cService.gajbeZt, this.cService.gajbeC-this.stavka.gajbeOutC, this.cService.gajbeCt, this.cService.gajbeP-this.stavka.gajbeOutP, this.cService.gajbePt).subscribe(()=>{});
    });
  }

  public deleteIzvoz(id: number){
    this.data.deleteIzvoz(id).subscribe(()=>{
      console.log(id);
      this.stavke = this.stavke.filter((el)=>el.id!=id);
    });
  }

  public stampaj(){
    this.printer.printPrintItem(this.printer.getPrintItem("print"));
  }

}
