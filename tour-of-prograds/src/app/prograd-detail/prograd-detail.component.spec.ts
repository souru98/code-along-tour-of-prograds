import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgradDetailComponent } from './prograd-detail.component';

describe('ProgradDetailComponent', () => {
  let component: ProgradDetailComponent;
  let fixture: ComponentFixture<ProgradDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgradDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgradDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
