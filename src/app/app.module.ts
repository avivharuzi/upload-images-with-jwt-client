// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './app.routes';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { HomeComponent } from './components/body/home/home.component';
import { UploadFormComponent } from './components/forms/upload-form/upload-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorPageComponent } from './components/errors/error-page/error-page.component';
import { ErrorFormComponent } from './components/errors/error-form/error-form.component';
import { MessageComponent } from './components/message/message.component';
import { PictureListComponent } from './components/body/picture-list/picture-list.component';
import { PictureItemComponent } from './components/body/picture-list/picture-item/picture-item.component';
import { PictureDetailsComponent } from './components/body/picture-details/picture-details.component';
import { PictureEditComponent } from './components/body/picture-list/picture-edit/picture-edit.component';
import { RegisterFormComponent } from './components/forms/register-form/register-form.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';

// Services
import { ValidationService } from './services/validation/validation.service';
import { UploadService } from './services/upload/upload.service';
import { ImageService } from './services/image/image.service';
import { UserService } from './services/user/user.service';
import { LoginService } from './services/login/login.service';
import { GuardService } from './services/guard/guard.service';

// Pipes
import { SearchPipe } from './pipes/search/search.pipe';
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';

// Directives
import { DefaultImageDirective } from './directives/default-image/default-image.directive';
import { NavComponent } from './components/header/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrorPageComponent,
    ErrorFormComponent,
    BodyComponent,
    CapitalizePipe,
    SearchPipe,
    HomeComponent,
    DefaultImageDirective,
    UploadFormComponent,
    MessageComponent,
    PictureListComponent,
    PictureItemComponent,
    PictureDetailsComponent,
    PictureEditComponent,
    RegisterFormComponent,
    LoginFormComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    RouterModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule
  ],
  providers: [
    ValidationService,
    UploadService,
    ImageService,
    UserService,
    LoginService,
    GuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
