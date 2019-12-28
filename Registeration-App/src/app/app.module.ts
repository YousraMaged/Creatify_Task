import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule }   from '@angular/forms';

const appRoutes: Routes = [
  { path: "", component: RegistrationPageComponent },
  { path: "home", component: HomePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    HomePageComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
