import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralnaComponent } from './generalna.component';

describe('GeneralnaComponent', () => {
  let component: GeneralnaComponent;
  let fixture: ComponentFixture<GeneralnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
