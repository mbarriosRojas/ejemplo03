import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConductorListComponent } from './conductor-list/conductor-list.component';
import { ConductorFormComponent } from './conductor-form/conductor-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ConductorListComponent, ConductorFormComponent],
  imports: [CommonModule, RouterModule],
})
export class ConductoresModule {}
