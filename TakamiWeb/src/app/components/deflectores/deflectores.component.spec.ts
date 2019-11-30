import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeflectoresComponent } from './deflectores.component';

describe('DeflectoresComponent', () => {
  let component: DeflectoresComponent;
  let fixture: ComponentFixture<DeflectoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeflectoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeflectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
