import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoDonacionPage } from './info-donacion.page';

describe('InfoDonacionPage', () => {
  let component: InfoDonacionPage;
  let fixture: ComponentFixture<InfoDonacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDonacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
