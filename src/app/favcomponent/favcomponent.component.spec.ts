import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavcomponentComponent } from './favcomponent.component';

describe('FavcomponentComponent', () => {
  let component: FavcomponentComponent;
  let fixture: ComponentFixture<FavcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
