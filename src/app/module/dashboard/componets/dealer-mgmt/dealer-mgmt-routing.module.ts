import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  { path: '', redirectTo: 'dealer', pathMatch: 'full' },

  {
    path: 'dealer',
    loadChildren: () =>
      import('./dealer/dealer.module').then(
        (m) => m.DealerModule
      ),
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DealerMgmtRoutingModule { }
