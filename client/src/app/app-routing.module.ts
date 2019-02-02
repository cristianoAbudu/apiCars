import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'src/app/components/home/home.component';
import { OffersComponent } from 'src/app/components/offers/offers.component';
import { DetailsCarComponent } from 'src/app/components/details-car/details-car.component';
import { ListBooksComponent } from 'src/app/components/admin/list-books/list-books.component';
import { LoginComponent } from 'src/app/components/user/login/login.component';
import { RegisterComponent } from 'src/app/components/user/register/register.component';
import { ProfileComponent } from 'src/app/components/user/profile/profile.component';
import { Page404Component } from 'src/app/components/page404/page404.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'offers', component: OffersComponent}, // filtro de autorizacao	
	{path: 'car/:id', component: DetailsCarComponent},	
	{path: 'admin/list-books', component: ListBooksComponent},	 // filtro de autorizacao	
	{path: 'user/login', component: LoginComponent},	
	{path: 'user/register', component: RegisterComponent},
	{path: 'user/profile', component: ProfileComponent},	 // filtro de autorizacao	
	{path: '**', component: Page404Component}	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
