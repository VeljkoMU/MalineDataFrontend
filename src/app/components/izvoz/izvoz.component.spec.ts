import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzvozComponent } from './izvoz.component';

describe('IzvozComponent', () => {
  let component: IzvozComponent;
  let fixture: ComponentFixture<IzvozComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzvozComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IzvozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
