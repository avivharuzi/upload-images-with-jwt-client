import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './components/errors/error-page/error-page.component';
import { HomeComponent } from './components/body/home/home.component';
import { PictureDetailsComponent } from './components/body/picture-details/picture-details.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: 'image/:image', component: PictureDetailsComponent, data: { title: 'Picture Details' } },
  { path: '404', component: ErrorPageComponent, data: { title: 'Error Page' } },
  { path:  '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent },
];

const appRouter: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [
    appRouter
  ]
})
export class RoutingModule { }
