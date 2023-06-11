import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-detail-order',
  templateUrl: './modal-detail-order.component.html',
  styleUrls: ['./modal-detail-order.component.scss'],
})
export class ModalDetailOrderComponent{

  @Input() modalOpen?: boolean;
  @Input() item?: any;
  @Output() modalEvent = new EventEmitter<boolean>();

  closeModal() {
    this.modalEvent.emit(false);
  }

}
