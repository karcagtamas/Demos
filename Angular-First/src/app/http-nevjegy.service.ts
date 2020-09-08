import { Injectable } from '@angular/core';
import { Nevjegymodel } from './nevjegy.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpNevjegyService {
  url: string = 'http://c103-21:7072/api/nevjegy/';
/*   private nevjegyek: Nevjegymodel[] = [
    {
      nev: "Gipsz Jakab",
      beosztas: "GodFather",
      tel: "+36 90 10 10 10",
      email: "jakab@email.com",
      cim: "9000 Győr itt"
    },
    {
      nev: "Orbán Viktor",
      beosztas: "Mafioso",
      tel: "",
      email: "noppe",
      cim: "Sehol"
    },
    {
      nev: "Lakatos Calrisian",
      beosztas: "Takarító",
      tel: "+36 90 20201 10",
      email: "takar@ito.com",
      cim: "Ott"
    },
    {
      nev: "Sauron",
      beosztas: "Az egy gyűrű igazi tulajdonosa",
      tel: "+36 90 20201 10",
      email: "fonok@orkok.mordor",
      cim: "Mordor"
    }
  ];
 */
  
 constructor(private http: HttpClient) { }

  getNevjegyek(): Observable<Nevjegymodel[]>{
    return this.http.get<Nevjegymodel[]>(this.url);
  }
}
