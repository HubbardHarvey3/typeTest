import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms'

import { PaneTwoComponent } from './pane-two.component';

describe('PaneTwoComponent', () => {
  let component: PaneTwoComponent;
  let fixture: ComponentFixture<PaneTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [PaneTwoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaneTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('typeInputForm var should be defined', () => {
    expect(component.typeInputForm).toBeDefined();
  })
});
