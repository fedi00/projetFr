import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpanierComponent } from './showpanier.component';

describe('ShowpanierComponent', () => {
  let component: ShowpanierComponent;
  let fixture: ComponentFixture<ShowpanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowpanierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowpanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
