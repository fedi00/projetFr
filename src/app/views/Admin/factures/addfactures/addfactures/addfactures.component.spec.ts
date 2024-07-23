import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfacturesComponent } from './addfactures.component';

describe('AddfacturesComponent', () => {
  let component: AddfacturesComponent;
  let fixture: ComponentFixture<AddfacturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddfacturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddfacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
