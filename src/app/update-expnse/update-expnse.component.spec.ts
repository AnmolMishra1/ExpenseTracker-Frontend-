import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExpnseComponent } from './update-expnse.component';

describe('UpdateExpnseComponent', () => {
  let component: UpdateExpnseComponent;
  let fixture: ComponentFixture<UpdateExpnseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateExpnseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateExpnseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
