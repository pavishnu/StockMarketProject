import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginViewComponent } from './Containers/user-login-view/user-login-view.component';
import { HomePageViewComponent } from './Containers/home-page-view/home-page-view.component';
import { AdminLandingViewComponent } from './Containers/admin-landing-view/admin-landing-view.component';
import { UserLandingViewComponent } from './Containers/user-landing-view/user-landing-view.component';

import { SignupViewComponent } from './Containers/signup-view/signup-view.component';
import { UserService } from './Services/user.service';
import { CompanyViewComponent } from './Containers/company-view/company-view.component';
import { ExchangeViewComponent } from './Containers/exchange-view/exchange-view.component';
import { CompanyService } from './Services/company.service';
import { CompanyRegisterViewComponent } from './Containers/company-register-view/company-register-view.component';
import { CompanyUpdateViewComponent } from './Containers/company-update-view/company-update-view.component';
import { ExchangeUpdateViewComponent } from './Containers/exchange-update-view/exchange-update-view.component';
import { ExchangeRegisterViewComponent } from './Containers/exchange-register-view/exchange-register-view.component';
import { IpoRegisterViewComponent } from './Containers/ipo-register-view/ipo-register-view.component';
import { IpoUpdateViewComponent } from './Containers/ipo-update-view/ipo-update-view.component';
import { IpoViewComponent } from './Containers/ipo-view/ipo-view.component';
import { ImportDataViewComponent } from './Containers/import-data-view/import-data-view.component';
import { CompareCompanyViewComponent } from './Containers/compare-company-view/compare-company-view.component';
import { UserIpoViewComponent } from './Containers/user-ipo-view/user-ipo-view.component';
import { UserOtherViewComponent } from './Containers/user-other-view/user-other-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HomePageViewComponent,   
    UserLoginViewComponent,
    AdminLandingViewComponent,
    UserLandingViewComponent,
    SignupViewComponent,
    CompanyViewComponent,
    ExchangeViewComponent,
    CompanyRegisterViewComponent,
    CompanyUpdateViewComponent,
    ExchangeUpdateViewComponent,
    ExchangeRegisterViewComponent,
    IpoRegisterViewComponent,
    IpoUpdateViewComponent,
    IpoViewComponent,
    ImportDataViewComponent,
    CompareCompanyViewComponent,
    UserIpoViewComponent,
    UserOtherViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
	  BrowserAnimationsModule,
	  ToastrModule.forRoot()
    
  ],
  providers: [UserService,CompanyService],
  bootstrap: [UserLoginViewComponent]
})
export class AppModule { }
