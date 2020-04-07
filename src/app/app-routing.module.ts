import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { JavaComponent } from './java/java.component';
import { AngularComponent } from './angular/angular.component';
import { NetComponent } from './net/net.component';
import { HomeComponent } from './home/home.component';
import {FundamentosJavaComponent} from './fundamentos-java/fundamentos-java.component';

const routes: Routes = [{
path: 'Java', component: JavaComponent
},
{
path: 'Angular', component: AngularComponent
},
{
  path: 'Net', component: NetComponent
},
{
  path: '', component: HomeComponent
},
{
  path: 'FundamentosJ', component: FundamentosJavaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
