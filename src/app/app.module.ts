import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ConductoresModule } from './conductores/conductores.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'conductores', loadChildren: () => import('./conductores/conductores.module').then((m) => m.ConductoresModule) },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ConductoresModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
