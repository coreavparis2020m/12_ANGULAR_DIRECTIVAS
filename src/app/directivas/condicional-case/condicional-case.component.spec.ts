import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionalCaseComponent } from './condicional-case.component';

describe('CondicionalCaseComponent', () => {
  let component: CondicionalCaseComponent;
  let fixture: ComponentFixture<CondicionalCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondicionalCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionalCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
