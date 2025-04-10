import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchItemComponent } from './task-item.component';
import { Match } from '../../../shared/models/Match';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';

describe('MatchItemComponent', () => {
  let component: MatchItemComponent;
  let fixture: ComponentFixture<MatchItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MatCheckboxModule],
      declarations: [MatchItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle match status', () => {
    const initialStatus = component.match.isFinished;
    component.toggleStatus();
    expect(component.match.isFinished).toBe(!initialStatus);
  });

  it('should emit statusChanged event when toggling status', () => {
    spyOn(component.statusChanged, 'emit');
    component.toggleStatus();
    expect(component.statusChanged.emit).toHaveBeenCalledWith(component.match);
  });
});
