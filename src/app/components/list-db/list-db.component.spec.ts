import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDbComponent } from './list-db.component';

describe('ListDbComponent', () => {
  let component: ListDbComponent;
  let fixture: ComponentFixture<ListDbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDbComponent]
    });
    fixture = TestBed.createComponent(ListDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
