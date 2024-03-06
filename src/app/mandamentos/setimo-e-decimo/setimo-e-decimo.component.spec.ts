import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetimoEDecimoComponent } from './setimo-e-decimo.component';

describe('SetimoEDecimoComponent', () => {
  let component: SetimoEDecimoComponent;
  let fixture: ComponentFixture<SetimoEDecimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetimoEDecimoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetimoEDecimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
