import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'src/app/models/korisnik';
import { DataService } from 'src/app/services/data.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-dodaj',
  templateUrl: './dodaj.component.html',
  styleUrls: ['./dodaj.component.css']
})
export class DodajComponent implements OnInit {

  public korisnik:Korisnik = {
    id: 0,
    gajbe: 1,
    ime: "",
    jmbg: "",
    gaz:0,
    ziro: "",
    mesto: ""
  }

  constructor(private dataService: DataService,
              public uiService: UiService) { }

  ngOnInit(): void {
  }

  public insert(){
    this.dataService.insertKorisnit(this.korisnik).subscribe(()=>{
    });
    this.uiService.gotoKorisnik();
    console.log(this.korisnik);
  }

}
