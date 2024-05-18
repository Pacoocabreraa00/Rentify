import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadWindowComponent } from './propiedad-window.component';

describe('PropiedadWindowComponent', () => {
  let component: PropiedadWindowComponent;
  let fixture: ComponentFixture<PropiedadWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropiedadWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropiedadWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
