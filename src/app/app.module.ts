import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AtuacaoPageComponent } from './pages/atuacao-page/atuacao-page.component';
import { ProbonoPageComponent } from './pages/probono-page/probono-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { ContatoPageComponent } from './pages/contato-page/contato-page.component';
import { ContatoFormComponent } from './shared/contato-form/contato-form.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    AboutPageComponent,
    AtuacaoPageComponent,
    ProbonoPageComponent,
    BlogPageComponent,
    ContatoPageComponent,
    ContatoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
