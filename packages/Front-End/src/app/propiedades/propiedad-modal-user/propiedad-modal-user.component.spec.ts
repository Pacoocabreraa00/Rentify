import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadModalUserComponent } from './propiedad-modal-user.component';

describe('PropiedadModalUserComponent', () => {
  let component: PropiedadModalUserComponent;
  let fixture: ComponentFixture<PropiedadModalUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropiedadModalUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropiedadModalUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
