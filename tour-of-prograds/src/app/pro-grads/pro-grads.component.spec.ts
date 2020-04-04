import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProGradsComponent } from './pro-grads.component';

describe('ProGradsComponent', () => {
  let component: ProGradsComponent;
  let fixture: ComponentFixture<ProGradsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProGradsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProGradsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
