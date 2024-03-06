import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OitavoComponent } from './oitavo.component';

describe('OitavoComponent', () => {
  let component: OitavoComponent;
  let fixture: ComponentFixture<OitavoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OitavoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OitavoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
