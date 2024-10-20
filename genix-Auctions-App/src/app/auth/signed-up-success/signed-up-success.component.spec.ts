import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedUpSuccessComponent } from './signed-up-success.component';

describe('SignedUpSuccessComponent', () => {
  let component: SignedUpSuccessComponent;
  let fixture: ComponentFixture<SignedUpSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignedUpSuccessComponent]
    });
    fixture = TestBed.createComponent(SignedUpSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
