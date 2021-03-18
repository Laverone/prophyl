import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAlarmComponent } from './table-alarm.component';

describe('TableAlarmComponent', () => {
  let component: TableAlarmComponent;
  let fixture: ComponentFixture<TableAlarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAlarmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
