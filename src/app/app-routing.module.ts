import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ListDbComponent } from './components/list-db/list-db.component';

const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'list', component: ListDbComponent},
  {path: 'list/:id', component: ItemDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
