import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusPanelFormatterComponent } from './status-panel-formatter.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('StatusPanelFormatterComponent', () => {
  let component: StatusPanelFormatterComponent;
  let fixture: ComponentFixture<StatusPanelFormatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusPanelFormatterComponent ],
      providers: [provideMockStore({})],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPanelFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
