import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { OffersComponent } from './components/offers/offers.component';
import { HeroComponent } from './components/hero/hero.component';
import { DetailsCarComponent } from './components/details-car/details-car.component';
import { ListBooksComponent } from './components/admin/list-books/list-books.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';


//Servicos
import { DataApiService } from 'src/app/services/data-api.service';
import { ModalComponent } from './components/modal/modal.component';

//Outros
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    OffersComponent,
    HeroComponent,
    DetailsCarComponent,
    ListBooksComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    Page404Component,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule, 
	FormsModule,
	NgxSpinnerModule 
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
