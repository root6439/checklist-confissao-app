import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SextoENonoComponent } from './sexto-enono.component';

describe('SextoENonoComponent', () => {
  let component: SextoENonoComponent;
  let fixture: ComponentFixture<SextoENonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SextoENonoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SextoENonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
