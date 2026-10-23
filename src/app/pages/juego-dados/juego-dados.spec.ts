import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegoDados } from './juego-dados';

describe('JuegoDados', () => {
  let component: JuegoDados;
  let fixture: ComponentFixture<JuegoDados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegoDados],
    }).compileComponents();

    fixture = TestBed.createComponent(JuegoDados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
