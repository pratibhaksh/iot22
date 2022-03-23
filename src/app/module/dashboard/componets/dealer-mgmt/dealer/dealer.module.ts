import { DealerRoutingModule } from './dealer-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDealerComponent } from './componet/view-dealer/view-dealer.component';
import { AddDealerComponent } from './componet/add-dealer/add-dealer.component';



@NgModule({
  declarations: [
    ViewDealerComponent,
    AddDealerComponent
  ],
  imports: [
    CommonModule,
    DealerRoutingModule
  ]
})
export class DealerModule { }
