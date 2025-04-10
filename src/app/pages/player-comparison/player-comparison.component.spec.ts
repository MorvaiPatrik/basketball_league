import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerComparisonComponent } from './player-comparison.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

describe('PlayerComparisonComponent', () => {
  let component: PlayerComparisonComponent;
  let fixture: ComponentFixture<PlayerComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerComparisonComponent],
      imports: [MatCardModule, MatFormFieldModule, MatSelectModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of players', () => {
    expect(component.players.length).toBeGreaterThan(0);
  });

  it('should have default players selected', () => {
    expect(component.player1).toBeTruthy();
    expect(component.player2).toBeTruthy();
  });
});
