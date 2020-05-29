import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IteracionComponent } from './iteracion.component';

describe('IteracionComponent', () => {
  let component: IteracionComponent;
  let fixture: ComponentFixture<IteracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IteracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IteracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
