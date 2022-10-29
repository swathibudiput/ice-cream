import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuttyconesComponent } from './nuttycones.component';

describe('NuttyconesComponent', () => {
  let component: NuttyconesComponent;
  let fixture: ComponentFixture<NuttyconesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuttyconesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuttyconesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
