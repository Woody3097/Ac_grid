import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxFormatterComponent } from './checkbox-formatter.component';

describe('CheckboxFormatterComponent', () => {
  let component: CheckboxFormatterComponent;
  let fixture: ComponentFixture<CheckboxFormatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxFormatterComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
