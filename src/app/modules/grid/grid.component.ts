import { Component, Self } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { FetchDataService } from '../../core/services/fetch-data.service';
import { RowDataModel } from '../../core/models/row-data.model';
import {map, takeUntil} from 'rxjs/operators';
import { ImageFormatterComponent } from '../../core/components/image-formatter/image-formatter.component';
import { LinkFormatterComponent } from '../../core/components/link-formatter/link-formatter.component';
import { StatusPanelFormatterComponent } from '../../core/components/status-panel-formatter/status-panel-formatter.component';
import 'ag-grid-enterprise';
import { Store } from '@ngrx/store';
import { SelectionType } from '../../core/store/grid-data.selectors';
import { HeaderCheckboxComponent } from '../../core/components/header-checkbox/header-checkbox.component';
import {CheckboxFormatterComponent} from "../../core/components/checkbox-formatter/checkbox-formatter.component";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [FetchDataService],
})
export class GridComponent {
  frameworkComponents: any;
  statusBar: any;
  columnDefs: any;
  defaultColDef = {
    suppressMenu: true,
  };
  rowData$: Observable<RowDataModel[]>;
  destroyed$: Subject<any> = new Subject();
  selectionType$: Observable<boolean>;

  constructor(@Self() private fetchDataService: FetchDataService, private store: Store) {
    this.columnDefs = [
      { field: 'selected', headerComponent: 'headerCheckboxComponent', cellRendererFramework: CheckboxFormatterComponent, maxWidth: 60, hide: false },
      { field: 'thumbnails', headerName: '', cellRendererFramework: ImageFormatterComponent, maxWidth: 200 },
      { field: 'publishedAt', headerName: 'Published on', maxWidth: 250 },
      { field: 'title', headerName: 'Video Title', cellRendererFramework: LinkFormatterComponent },
      { field: 'description', headerName: 'Description' },
    ];

    this.store.select(SelectionType).pipe(takeUntil(this.destroyed$))

    this.rowData$ = this.fetchDataService.fetchData('https://www.googleapis.com/youtube/v3/search?key=AIzaSyAciL_M9kFsLpIEbSNISmcRCAyWeLsz4zo&maxResults=50&type=video&part=snippet&q=john').
      pipe(
        map(data => {
          return data.items.map((rowData: any) => (
            {
              thumbnails: rowData.snippet.thumbnails.default.url,
              publishedAt: rowData.snippet.publishedAt,
              title: { title: rowData.snippet.title, videoId: rowData.id.videoId },
              description: rowData.snippet.description,
              selected: false,
            }),
          );
        },
        ),
      );
    this.selectionType$ = this.store.select(SelectionType);
    this.frameworkComponents = {
      statusPanelFormatterComponent: StatusPanelFormatterComponent,
      headerCheckboxComponent: HeaderCheckboxComponent,
    };
    this.statusBar = {
      statusPanels: [{ statusPanel: 'statusPanelFormatterComponent' }],
    };
  }

  onFirstDataRendered(params: any): void {
    params.api.sizeColumnsToFit();
  }
}
