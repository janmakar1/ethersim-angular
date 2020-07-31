import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EyechartViewComponent } from './eyechart-view.component';

describe('EyechartViewComponent', () => {
  let component: EyechartViewComponent;
  let fixture: ComponentFixture<EyechartViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyechartViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyechartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
