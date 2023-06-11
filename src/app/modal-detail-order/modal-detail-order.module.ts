import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalDetailOrderComponent } from './modal-detail-order.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ModalDetailOrderComponent],
  exports: [ModalDetailOrderComponent]
})
export class ModalDetailOrderComponentModule {}
