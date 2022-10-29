import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaloodaComponent } from './falooda.component';

describe('FaloodaComponent', () => {
  let component: FaloodaComponent;
  let fixture: ComponentFixture<FaloodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaloodaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaloodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
