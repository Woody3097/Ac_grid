import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusPanelFormatterComponent } from './status-panel-formatter.component';

describe('StatusPanelFormatterComponent', () => {
  let component: StatusPanelFormatterComponent;
  let fixture: ComponentFixture<StatusPanelFormatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusPanelFormatterComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPanelFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
