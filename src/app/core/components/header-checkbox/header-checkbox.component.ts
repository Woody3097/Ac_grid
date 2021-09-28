import { Component } from '@angular/core';

@Component({
  selector: 'app-header-checkbox',
  templateUrl: './header-checkbox.component.html',
  styleUrls: ['./header-checkbox.component.scss'],
})
export class HeaderCheckboxComponent {
  params: any;
  selected: boolean = false

  agInit(params: any): void {
    this.params = params
  }

  toggleAll(): void {
    if(this.selected) {
      this.params.api.deselectAll();
    }
    else {
      this.params.api.selectAll();
    }
    this.selected = !this.selected
  }
}
