import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWalkerRequestComponent } from './add-walker-request.component';

describe('AddWalkerRequestComponent', () => {
  let component: AddWalkerRequestComponent;
  let fixture: ComponentFixture<AddWalkerRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWalkerRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWalkerRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
