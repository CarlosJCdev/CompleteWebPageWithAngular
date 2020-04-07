import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundamentosJavaComponent } from './fundamentos-java.component';

describe('FundamentosJavaComponent', () => {
  let component: FundamentosJavaComponent;
  let fixture: ComponentFixture<FundamentosJavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundamentosJavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundamentosJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
