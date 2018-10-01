import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterService } from './components/register/register.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SigninComponent } from './components/signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavigationComponent,
    HomepageComponent,
    SigninComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomepageComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'signin', component: SigninComponent}
    ])
  ],
  providers: [ RegisterService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
