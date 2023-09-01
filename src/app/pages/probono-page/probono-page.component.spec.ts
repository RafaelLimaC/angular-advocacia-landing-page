import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbonoPageComponent } from './probono-page.component';

describe('ProbonoPageComponent', () => {
  let component: ProbonoPageComponent;
  let fixture: ComponentFixture<ProbonoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProbonoPageComponent]
    });
    fixture = TestBed.createComponent(ProbonoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
