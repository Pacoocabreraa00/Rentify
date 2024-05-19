import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadModalComponent } from './propiedad-modal.component';

describe('PropiedadModalComponent', () => {
  let component: PropiedadModalComponent;
  let fixture: ComponentFixture<PropiedadModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropiedadModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropiedadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
