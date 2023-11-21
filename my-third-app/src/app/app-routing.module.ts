import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './pages/binding/binding.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChildComponent } from './pages/binding/child/child.component';
import { ParentComponent } from './pages/binding/parent/parent.component';
import { StudentsDetailsComponent } from './pages/dashboard/students-details/students-details.component';

const routes: Routes = [
  {path: 'binding', component:BindingComponent },
  {path: 'dashboard', component:DashboardComponent },
  {path: 'parent', component:ParentComponent },
  {path: 'detail/:id', component:StudentsDetailsComponent },
  //{path: 'child', component:ChildComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
