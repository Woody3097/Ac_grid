import { Component } from '@angular/core';
import { IStatusPanelParams } from 'ag-grid-community';
import { Store } from '@ngrx/store';
import { ToggleSelectionType } from '../../store/grid-data.actions';
import {SelectionType} from "../../store/grid-data.selectors";

@Component({
  selector: 'app-status-panel-formatter',
  templateUrl: './status-panel-formatter.component.html',
  styleUrls: ['./status-panel-formatter.component.scss'],
})
export class StatusPanelFormatterComponent {
  all: any;
  selected: any;

  constructor(private store: Store) {}

  agInit(params: IStatusPanelParams): void {
    params.api.addEventListener('firstDataRendered', () => {
      this.all = params.api.getModel().getRowCount();
      this.selected = params.api.getSelectedNodes().length;

      this.store.select(SelectionType).subscribe(res => {
        params.columnApi.setColumnVisible('selected', res);
        params.api.sizeColumnsToFit();
      })
    });
    params.api.addEventListener('rowSelected', () => {
      this.selected = params.api.getSelectedNodes().length;
    });
  }

  toggleSelection(): void {
    this.store.dispatch(ToggleSelectionType());
  }
}
