import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingReportComponent } from './testing-report.component';

describe('TestingReportComponent', () => {
  let component: TestingReportComponent;
  let fixture: ComponentFixture<TestingReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
