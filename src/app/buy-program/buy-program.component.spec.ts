import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyProgramComponent } from './buy-program.component';

describe('BuyProgramComponent', () => {
  let component: BuyProgramComponent;
  let fixture: ComponentFixture<BuyProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyProgramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
