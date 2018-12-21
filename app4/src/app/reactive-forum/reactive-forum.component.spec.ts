import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveForumComponent } from './reactive-forum.component';

describe('ReactiveForumComponent', () => {
  let component: ReactiveForumComponent;
  let fixture: ComponentFixture<ReactiveForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
