import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './components/main/add/components/add.component';
import { AllComponent } from './components/main/all/components/all.component';
import { SearchComponent } from './components/main/search/components/search.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { ProgramStudentsComponent } from './components/main/program-students/components/program-students.component';
import { RouterModule } from '@angular/router';
import { EditComponent } from './components/main/edit/components/edit.component';
import { AppRoutingModule } from './app-routing.module';
import { IntakeComponent } from './components/main/intake/components/intake.component';
import { SettingsComponent } from './components/main/settings/components/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    SearchComponent,
    SidebarComponent,
    ProgramStudentsComponent,
    EditComponent,
    IntakeComponent,
    SettingsComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,

  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
