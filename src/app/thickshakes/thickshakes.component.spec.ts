import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThickshakesComponent } from './thickshakes.component';

describe('ThickshakesComponent', () => {
  let component: ThickshakesComponent;
  let fixture: ComponentFixture<ThickshakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThickshakesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThickshakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
