import { Component, OnInit } from '@angular/core';
import { CenaService } from 'src/app/services/cena.service';
import { DataService } from 'src/app/services/data.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public tresnje: number = 0;
  public k: number = 0;
  public ko: number = 0;
  public gajbeC: number = 0;
  public gajbeP: number = 0;
  public gajbeZ: number = 0;
  public gajbePT: number = 0;
  public gajbeCT: number = 0;
  public gajbeZT: number = 0;
  public azurne: boolean = false;
  
  public uvozo:number = 0;
  public uvozk:number = 0;
  public uvozko:number = 0;
  public izvozo:number = 0;
  public izvozk:number = 0;
  public izvozko:number = 0;
  public trenutnoo: number = 0;
  public trenutnok: number = 0;
  public trenutnoko: number = 0;

  constructor(public uiService: UiService,
              private ceneService: CenaService,
              private data: DataService) { }

  ngOnInit(): void {
    this.tresnje= this.ceneService.cenaO;
    this.k = this.ceneService.cenaK;
    this.ko= this.ceneService.cenaKo;
    if(this.tresnje!=0 || this.k!=0 || this.ko!=0)
      this.azurne = true;
    this.data.getGajbe().subscribe((data:any)=>{
      console.log(data);
      this.gajbeZ=data[0][0];
      this.gajbeZT=data[0][1];
      this.gajbeC=data[0][2];
      this.gajbeCT=data[0][3];
      this.gajbeP=data[0][4];
      this.gajbePT=data[0][5];
      this.ceneService.gajbeC = this.gajbeC;
      this.ceneService.gajbeZ = this.gajbeZ;
      this.ceneService.gajbeP = this.gajbeP;
  
      this.ceneService.gajbeCt = this.gajbeCT;
      this.ceneService.gajbeZt = this.gajbeZT;
      this.ceneService.gajbePt = this.gajbePT;
    });

    this.data.getUkupnoUvoz().subscribe((data: any)=>{
      this.uvozko = data[0][0];
      this.uvozk = data[0][1];
      this.uvozo = data[0][2];
    });

    this.data.getUkupnoIzvoz().subscribe((data:any)=>{
      console.log(data);
      this.izvozko = data[0][0];
      this.izvozk = data[0][1];
      this.izvozo = data[0][2];
    });

  }

  public izmeniCenu(){
    if(this.tresnje==0 || this.k==0 || this.ko==0)
          return;

    this.ceneService.cenaO = this.tresnje;
    this.ceneService.cenaK = this.k;
    this.ceneService.cenaKo = this.ko;
    this.azurne = true;
  }



  public izmeniGajbe(){
    this.data.updateGajbe(this.gajbeZ, this.gajbeZT, this.gajbeC, this.gajbeCT, this.gajbeP, this.gajbePT).subscribe(()=>{});
    this.ceneService.gajbeC = this.gajbeC;
    this.ceneService.gajbeZ = this.gajbeZ;
    this.ceneService.gajbeP = this.gajbeP;

    this.ceneService.gajbeCt = this.gajbeCT;
    this.ceneService.gajbeZt = this.gajbeZT;
    this.ceneService.gajbePt = this.gajbePT;
  }

}
