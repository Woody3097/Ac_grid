import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { GridComponent } from './grid.component';
import { HttpClientModule } from '@angular/common/http';
import { FetchDataService } from '../../core/services/fetch-data.service';
import { provideMockStore } from '@ngrx/store/testing';
import {AgGridModule} from "ag-grid-angular";
import {CheckboxFormatterComponent} from "../../core/components/checkbox-formatter/checkbox-formatter.component";
import {ImageFormatterComponent} from "../../core/components/image-formatter/image-formatter.component";
import {LinkFormatterComponent} from "../../core/components/link-formatter/link-formatter.component";
import {StatusPanelFormatterComponent} from "../../core/components/status-panel-formatter/status-panel-formatter.component";
import {HeaderCheckboxComponent} from "../../core/components/header-checkbox/header-checkbox.component";
import {RouterTestingModule} from "@angular/router/testing";
import {NgModule} from "@angular/core";

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridComponent],
      imports: [HttpClientModule],
      providers: [FetchDataService,
        provideMockStore({ initialState }),
        AgGridModule.withComponents([
          CheckboxFormatterComponent,
          ImageFormatterComponent,
          LinkFormatterComponent,
          StatusPanelFormatterComponent,
          HeaderCheckboxComponent,
        ])]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should do things onGridReady() is supposed to do', waitForAsync(() => {
    fixture.whenStable().then(() => {
      console.log(' ==> stable!');
      expect(component.api).toBeTruthy()
    });

  }));
});
