import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NevjegyComponent } from './nevjegy/nevjegy.component';
import { NagybetusPipe } from './nagybetus.pipe';
import { HttpNevjegyService} from "./http-nevjegy.service";

@NgModule({
  declarations: [
    AppComponent,
    NevjegyComponent,
    NagybetusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpNevjegyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
