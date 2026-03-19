import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesService } from './clientes.service';

@NgModule({
  declarations: [
    ClientesComponent,
    ClienteListComponent,
    ClienteFormComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ],
  providers: [
    ClientesService
  ]
})
export class ClientesModule { }
