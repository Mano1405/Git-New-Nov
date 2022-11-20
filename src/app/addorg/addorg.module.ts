import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [
    AddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AddorgModule { }
