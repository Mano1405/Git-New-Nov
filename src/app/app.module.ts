import { AddorgModule } from './addorg/addorg.module';
import { RouterModule } from '@angular/router';
import { ListOrganizationModule } from './list-organization/list-organization.module';
import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginModule,
    ListOrganizationModule,
    RouterModule,
    AddorgModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
