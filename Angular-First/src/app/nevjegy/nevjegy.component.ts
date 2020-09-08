import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Nevjegymodel } from "../nevjegy.model";

@Component({
  selector: "app-nevjegy",
  templateUrl: "./nevjegy.component.html",
  styleUrls: ["./nevjegy.component.css"]
})
export class NevjegyComponent implements OnInit {
  @Input()
  nevjegy: Nevjegymodel;
  @Output() torles = new EventEmitter();
  modositas: boolean = false;
  modositottNev: string;
  constructor() {}

  ngOnInit() {}

  modosit_click(){
    this.modositas = true;
    this.modositottNev = this.nevjegy.nev;
  }

  megsem_click(){
    this.modositas = false;
  }

  mentes_click(){
    this.modositas = false;
    this.nevjegy.nev = this.modositottNev;
  }

  torles_click(){
    this.torles.emit(this.nevjegy);
  }
}
