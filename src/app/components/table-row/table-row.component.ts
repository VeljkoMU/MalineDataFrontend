import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { stavka } from 'src/app/models/stavka';

@Component({
  selector: 'tr[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {

  @Input() public isFullView:boolean = true;
  @Output() public deleteSingal: EventEmitter<number> = new EventEmitter<number>();
  @Input() public v:boolean = true;

  @Input() public data:stavka = {
    id: 0,
    date: "",
    o: 0,
    k: 0,
    ko: 0,
    cenaO: 0,
    cenaK: 0,
    cenaKo: 0,
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

  @Input() public canDelete: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public delete(){
    this.deleteSingal.emit(this.data.id);
  }

}
