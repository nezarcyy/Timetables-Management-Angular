import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfComponent } from './edit-prof.component';

describe('EditProfComponent', () => {
  let component: EditProfComponent;
  let fixture: ComponentFixture<EditProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
