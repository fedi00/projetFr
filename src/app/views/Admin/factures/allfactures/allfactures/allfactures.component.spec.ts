import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllfacturesComponent } from './allfactures.component';

describe('AllfacturesComponent', () => {
  let component: AllfacturesComponent;
  let fixture: ComponentFixture<AllfacturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllfacturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllfacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
