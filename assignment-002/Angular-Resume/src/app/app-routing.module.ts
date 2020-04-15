import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { TechnicleComponent } from './technicle/technicle.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'education', component: EducationComponent },
  { path: 'technicle', component: TechnicleComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [EducationComponent,TechnicleComponent,AboutComponent]