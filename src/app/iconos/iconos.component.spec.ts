import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconosComponent } from './iconos.component';

describe('IconosComponent', () => {
  let component: IconosComponent;
  let fixture: ComponentFixture<IconosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
