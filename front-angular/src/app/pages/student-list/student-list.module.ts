import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentListRoutingModule } from './student-list-routing.module';
import { StudentListComponent } from './student-list.component';
import { AngularMaterialModule } from '../../shared/materials/angular-material.module';

import { PopupModule } from '../popup/popup.module';

@NgModule({
  declarations: [StudentListComponent],
  imports: [
    CommonModule,
    StudentListRoutingModule,
    AngularMaterialModule,
    PopupModule,
  ],
})
export class StudentListModule {}
