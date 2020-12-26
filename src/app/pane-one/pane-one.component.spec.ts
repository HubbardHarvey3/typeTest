import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaneOneComponent } from './pane-one.component';

describe('PaneOneComponent', () => {
  let component: PaneOneComponent;
  let fixture: ComponentFixture<PaneOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaneOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaneOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
