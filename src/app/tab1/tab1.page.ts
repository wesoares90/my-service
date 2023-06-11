import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  isModalOpen = false;

  orderList = [
    {
      name: 'rola',
      person: 'Paulo Jorge',
      distance: 'Menos de 1 Km'
    }
  ];

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


}
