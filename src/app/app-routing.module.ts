import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestReportComponent } from './components/test-report/test-report.component';

const routes: Routes = [
  { path: "", component: TestReportComponent },
  { path: "plate", component: TestReportComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
