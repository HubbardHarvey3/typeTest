import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaneThreeComponent } from './pane-three.component';

describe('PaneThreeComponent', () => {
  let component: PaneThreeComponent;
  let fixture: ComponentFixture<PaneThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaneThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaneThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
