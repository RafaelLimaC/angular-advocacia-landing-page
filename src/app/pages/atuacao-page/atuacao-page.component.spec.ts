import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtuacaoPageComponent } from './atuacao-page.component';

describe('AtuacaoPageComponent', () => {
  let component: AtuacaoPageComponent;
  let fixture: ComponentFixture<AtuacaoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtuacaoPageComponent]
    });
    fixture = TestBed.createComponent(AtuacaoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
