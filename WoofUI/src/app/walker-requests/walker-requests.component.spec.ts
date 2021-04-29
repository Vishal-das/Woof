import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkerRequestsComponent } from './walker-requests.component';

describe('WalkerRequestsComponent', () => {
  let component: WalkerRequestsComponent;
  let fixture: ComponentFixture<WalkerRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkerRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkerRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
