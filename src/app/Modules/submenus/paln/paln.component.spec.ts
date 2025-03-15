import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalnComponent } from './paln.component';

describe('PalnComponent', () => {
  let component: PalnComponent;
  let fixture: ComponentFixture<PalnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PalnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PalnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
