import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadMessageComponent } from './head-message.component';

describe('HeadMessageComponent', () => {
  let component: HeadMessageComponent;
  let fixture: ComponentFixture<HeadMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
