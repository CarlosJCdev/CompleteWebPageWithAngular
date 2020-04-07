import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JavaComponent } from './java/java.component';
import { AngularComponent } from './angular/angular.component';
import { NetComponent } from './net/net.component';
import { HomeComponent } from './home/home.component';
import { FundamentosJavaComponent } from './fundamentos-java/fundamentos-java.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SubtituloComponent } from './subtitulo/subtitulo.component';
import { IconosComponent } from './iconos/iconos.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    JavaComponent,
    AngularComponent,
    NetComponent,
    HomeComponent,
    FundamentosJavaComponent,
    SidebarComponent,
    SubtituloComponent,
    IconosComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
