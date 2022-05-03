import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CenaService {

  public cenaO:number = 0;
  public cenaK:number = 0;
  public cenaKo:number = 0;

  public gajbeC: number = 0;
  public gajbeZ: number = 0;
  public gajbeP: number = 0;

  public gajbeCt: number = 0;
  public gajbeZt: number = 0;
  public gajbePt: number = 0;


  constructor() { }
}
