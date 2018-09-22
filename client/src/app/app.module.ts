import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register/register.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'register', component: RegisterComponent}
    ])
  ],
  providers: [ RegisterService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
