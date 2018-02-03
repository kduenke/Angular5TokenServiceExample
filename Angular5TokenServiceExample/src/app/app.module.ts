import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ITunesService } from './services/itunes.service';
import { TokenService } from './services/token.service';
import { SampleComponent } from './sample/sample.component';


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ITunesService, TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
