import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsComponent } from '../pages/reactiveForms/reactiveForms.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { FormsModule } from '@angular/forms';

import {ReactiveFormsModule} from '@angular/forms';
import { TemplateDrivenComponent } from '../pages/templateDriven/templateDriven.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReactiveFormsComponent,
    ResaltadoDirective,
    TemplateDrivenComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }