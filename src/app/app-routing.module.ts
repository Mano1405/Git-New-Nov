import { AddorgModule } from './addorg/addorg.module';
import { OrgComponent } from './list-organization/org/org.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './addorg/add/add.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'org', component: OrgComponent },
  { path: 'addorg', component: AddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
