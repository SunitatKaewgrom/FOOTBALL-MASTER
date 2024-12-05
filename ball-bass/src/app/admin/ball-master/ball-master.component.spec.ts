import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallMasterComponent } from './ball-master.component';

describe('BallMasterComponent', () => {
  let component: BallMasterComponent;
  let fixture: ComponentFixture<BallMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BallMasterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BallMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
