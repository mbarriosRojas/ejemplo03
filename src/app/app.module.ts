import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ConductoresComponent } from './conductores/conductores.component';
import { ConductoresService } from './conductores/conductores.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ConductoresComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ConductoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
