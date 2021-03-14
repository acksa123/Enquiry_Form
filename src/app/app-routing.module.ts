import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HistoryComponent } from './history/history.component';
import { UsereditComponent } from './useredit/useredit.component';


const routes: Routes = [
  {path:'',component:FormComponent},
  {path:'history',component:HistoryComponent},
  { path:'enquiries/:id',component:UsereditComponent }

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
