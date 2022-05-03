import { Component, OnInit } from '@angular/core';
import { NgxPrinterService } from 'ngx-printer';
import { stavka } from 'src/app/models/stavka';
import { DataService } from 'src/app/services/data.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-generalna',
  templateUrl: './generalna.component.html',
  styleUrls: ['./generalna.component.css']
})
export class GeneralnaComponent implements OnInit {

  public stavke: stavka[]| undefined = [];

  constructor(private data: DataService,
              public uiService: UiService,
              private printer:NgxPrinterService) { }

  ngOnInit(): void {
    this.data.getGeneral().subscribe((data:any)=>{
      data.forEach((el:any)=>{
        this.stavke?.push({
          id: el[0],
          date: el[0],
          o: el[1],
          k: el[2],
          ko: el[3],
          gajbeInZ: 0,
          gajbeOutZ: 0,
          gajbeInP: 0,
          gajbeOutP: 0,
          gajbeInC: 0,
          gajbeOutC: 0,
          cenaO: el[4],
          cenaK: el[5],
          cenaKo: el[6],
          profitO: el[2] * el[4],
          profitK: el[3] * el[5],
          profitKo: el[4] * el[6],
          profitU: el[2] * el[4] + el[3] * el[5] + el[4] * el[6],
          isplaceno: 0
        })
      })
    });
    console.log(this.stavke);
  }

  public stampaj(){
    this.printer.printPrintItem(this.printer.getPrintItem("print"));
  }

}
