import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TacticalBoardComponent } from './tactical-board.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

describe('TacticalBoardComponent', () => {
  let component: TacticalBoardComponent;
  let fixture: ComponentFixture<TacticalBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TacticalBoardComponent],
      imports: [
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TacticalBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a marker on click', () => {
    const initialLength = component.markers.length;
    component.onCourtClick(new MouseEvent('click', { clientX: 100, clientY: 100 }));
    expect(component.markers.length).toBe(initialLength + 1);
  });

  it('should add a comment', () => {
    component.newComment = 'Támadás elemzés';
    const initialCount = component.comments.length;
    component.addComment();
    expect(component.comments.length).toBe(initialCount + 1);
  });
});
