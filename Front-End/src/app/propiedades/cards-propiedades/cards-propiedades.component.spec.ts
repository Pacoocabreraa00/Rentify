import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPropiedadesComponent } from './cards-propiedades.component';

describe('CardsPropiedadesComponent', () => {
  let component: CardsPropiedadesComponent;
  let fixture: ComponentFixture<CardsPropiedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsPropiedadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsPropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
