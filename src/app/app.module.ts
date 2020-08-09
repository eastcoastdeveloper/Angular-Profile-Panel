import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfilePanelComponent } from './profile-panel/profile-panel.component';

@NgModule({
  imports: [
      BrowserModule,
      FormsModule
    ],
  declarations: [
      AppComponent,
      HeaderComponent,
      ProfilePanelComponent
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
