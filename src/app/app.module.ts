import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HoverdirectiveDirective } from './hoverdirective.directive';
import { ScrolldirectiveDirective } from './scrolldirective.directive';
import { FooterComponent } from './footer/footer.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HoverdirectiveDirective,
    ScrolldirectiveDirective,
    FooterComponent,
    SectionTitleComponent,
    ProfileCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
