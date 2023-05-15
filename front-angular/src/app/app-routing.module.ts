import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/student-list',
    pathMatch: 'full',
  },
  {
    path: 'student-list',
    loadChildren: () =>
      import('./pages/student-list/student-list.module').then(
        (m) => m.StudentListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
