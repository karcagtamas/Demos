import { Component, OnInit } from "@angular/core";
import { Nevjegymodel } from "./nevjegy.model";
import { HttpNevjegyService } from "./http-nevjegy.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "first";
  nevjegyek: Nevjegymodel[] = [];

  constructor(private httpNevjegyService: HttpNevjegyService) { }
  
  ngOnInit() {
    window.setTimeout(() => {this.title = "Első app";}, 5000);

    this.httpNevjegyService.getNevjegyek().subscribe(data => {this.nevjegyek = data; console.log(data);});
  }

  torles(nevjegy: Nevjegymodel) {
    const index = this.nevjegyek.indexOf(nevjegy);
    if (index > -1) this.nevjegyek.splice(index, 1);
  }
}
