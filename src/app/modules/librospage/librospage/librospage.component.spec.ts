import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrospageComponent } from './librospage.component';

describe('LibrospageComponent', () => {
  let component: LibrospageComponent;
  let fixture: ComponentFixture<LibrospageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrospageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibrospageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
