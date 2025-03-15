import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalFundsComponent } from './withdrawal-funds.component';

describe('WithdrawalFundsComponent', () => {
  let component: WithdrawalFundsComponent;
  let fixture: ComponentFixture<WithdrawalFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithdrawalFundsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithdrawalFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
