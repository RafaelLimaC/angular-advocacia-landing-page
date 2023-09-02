import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCtaComponent } from './botao-cta.component';

describe('BotaoCtaComponent', () => {
  let component: BotaoCtaComponent;
  let fixture: ComponentFixture<BotaoCtaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotaoCtaComponent]
    });
    fixture = TestBed.createComponent(BotaoCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
