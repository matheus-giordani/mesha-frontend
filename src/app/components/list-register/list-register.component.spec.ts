import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRegisterComponent } from './list-register.component';

describe('ListRegisterComponent', () => {
  let component: ListRegisterComponent;
  let fixture: ComponentFixture<ListRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRegisterComponent]
    });
    fixture = TestBed.createComponent(ListRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
