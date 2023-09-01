import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProbonoPageComponent } from './pages/probono-page/probono-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { ContatoPageComponent } from './pages/contato-page/contato-page.component';
import { AtuacaoPageComponent } from './pages/atuacao-page/atuacao-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'atuacao', component: AtuacaoPageComponent },
  { path: 'sobre', component: AboutPageComponent },
  { path: 'pro-bono', component: ProbonoPageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'contato', component: ContatoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


