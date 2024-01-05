import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateventaComponent } from './updateventa.component';

describe('UpdateventaComponent', () => {
  let component: UpdateventaComponent;
  let fixture: ComponentFixture<UpdateventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateventaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
