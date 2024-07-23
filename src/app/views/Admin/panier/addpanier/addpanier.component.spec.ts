import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpanierComponent } from './addpanier.component';

describe('AddpanierComponent', () => {
  let component: AddpanierComponent;
  let fixture: ComponentFixture<AddpanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddpanierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddpanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
