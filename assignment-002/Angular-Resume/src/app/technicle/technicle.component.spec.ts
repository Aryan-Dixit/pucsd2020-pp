import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicleComponent } from './technicle.component';

describe('TechnicleComponent', () => {
  let component: TechnicleComponent;
  let fixture: ComponentFixture<TechnicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
