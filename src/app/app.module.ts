import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ViajeListComponent } from './viajes/viaje-list/viaje-list.component';
import { ViajesService } from './viajes/viajes.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ViajeListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ViajesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
