import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergentesComponent } from './emergentes.component';

describe('EmergentesComponent', () => {
  let component: EmergentesComponent;
  let fixture: ComponentFixture<EmergentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmergentesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
