// Modules
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './components/body/home/home.component';
import { PictureDetailsComponent } from './components/body/picture-details/picture-details.component';
import { RegisterFormComponent } from './components/forms/register-form/register-form.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { ErrorPageComponent } from './components/errors/error-page/error-page.component';

// Services
import { GuardService } from './services/guard/guard.service';

// Routes
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [ GuardService ], data: { title: 'Home' } },
  { path: 'image/:image', component: PictureDetailsComponent, canActivate: [ GuardService ], data: { title: 'Picture Details' } },
  { path: 'login', component: LoginFormComponent, data: { title: 'Login' } },
  { path: 'register', component: RegisterFormComponent, data: { title: 'Register' } },
  { path: '404', component: ErrorPageComponent, data: { title: 'Error Page' } },
  { path:  '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent },
];

const appRouter: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [
    appRouter
  ]
})
export class RoutingModule { }
