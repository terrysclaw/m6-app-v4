import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, HttpModule } from '@angular/http';
import { AdsenseModule } from 'ng2-adsense';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
	HttpModule,
	AdsenseModule.forRoot({
      adClient: 'ca-pub-0437258559459382'
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
