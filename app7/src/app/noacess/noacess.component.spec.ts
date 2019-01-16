import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoacessComponent } from './noacess.component';

describe('NoacessComponent', () => {
  let component: NoacessComponent;
  let fixture: ComponentFixture<NoacessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoacessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoacessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
