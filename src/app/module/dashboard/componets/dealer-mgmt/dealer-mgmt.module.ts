import { RouterModule } from '@angular/router';
import { DealerMgmtRoutingModule } from './dealer-mgmt-routing.module';
import { DealerRoutingModule } from './dealer/dealer-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealerComponent } from './dealer/dealer.component';
import { DealerAdminComponent } from './dealer-admin/dealer-admin.component';



@NgModule({
  declarations: [
    DealerComponent,
    DealerAdminComponent
  ],
  imports: [
    CommonModule,
    DealerMgmtRoutingModule,
    RouterModule
  ]
})
export class DealerMgmtModule { }
