import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCepComponent } from './angular-cep.component';

describe('AngularCepComponent', () => {
  let component: AngularCepComponent;
  let fixture: ComponentFixture<AngularCepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularCepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
