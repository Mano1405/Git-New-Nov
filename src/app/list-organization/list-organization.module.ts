import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgComponent } from './org/org.component';



@NgModule({
  declarations: [
    OrgComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[OrgComponent]
})
export class ListOrganizationModule { }
