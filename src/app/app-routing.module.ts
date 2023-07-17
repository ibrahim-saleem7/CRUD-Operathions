import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/main/edit/components/edit.component';
import { AllComponent } from './components/main/all/components/all.component';
import { AddComponent } from './components/main/add/components/add.component';
import { SearchComponent } from './components/main/search/components/search.component';
import { ProgramStudentsComponent } from './components/main/program-students/components/program-students.component';
import { SettingsComponent } from './components/main/settings/components/settings.component';
import { IntakeComponent } from './components/main/intake/components/intake.component';

  const routes: Routes = [
    { path: '', redirectTo:'all', pathMatch :"full"},
    { path: 'all', component:AllComponent},
    { path: 'add', component:AddComponent},
    { path: 'search', component:SearchComponent},
    { path: 'programs', component:ProgramStudentsComponent},
    { path: 'edit/:id', component:EditComponent},
    { path: 'intake', component:IntakeComponent},
    { path: 'settings', component:SettingsComponent},
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
