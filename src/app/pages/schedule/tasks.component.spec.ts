import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasksComponent } from './tasks.component';
import { MatchService } from '../../shared/services/MatchService';
import { of } from 'rxjs';
import { Match } from '../../shared/models/Match';
import { RouterTestingModule } from '@angular/router/testing';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatchItemComponent } from './task-item/task-item.component';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;
  let matchServiceMock: jasmine.SpyObj<MatchService>;

  beforeEach(async () => {
    matchServiceMock = jasmine.createSpyObj('MatchService', ['getMatches']);

    matchServiceMock.getMatches.and.returnValue(of([
      {
        homeTeam: 'Team A',
        awayTeam: 'Team B',
        matchDate: new Date('2025-04-06T15:00:00'),
        location: 'Stadium A',
        isFinished: false,
        mvpHome: 'Player A1',
        mvpAway: 'Player B1'
      },
      {
        homeTeam: 'Team C',
        awayTeam: 'Team D',
        matchDate: new Date('2025-04-07T18:30:00'),
        location: 'Stadium B',
        isFinished: true,
        mvpHome: 'Player C1',
        mvpAway: 'Player D1'
      }
    ]));

    await TestBed.configureTestingModule({
      declarations: [TasksComponent, MatchItemComponent],
      imports: [MatTableModule, CommonModule, RouterTestingModule],
      providers: [{ provide: MatchService, useValue: matchServiceMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load matches', () => {
    expect(component.matches.length).toBe(2);
  });

  it('should display the MVP for home and away teams', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const firstMatchMVPHome = compiled.querySelector('.mvp-home');
    const firstMatchMVPAway = compiled.querySelector('.mvp-away');

    expect(firstMatchMVPHome?.textContent).toContain('MVP: Player A1');
    expect(firstMatchMVPAway?.textContent).toContain('MVP: Player B1');

    const secondMatchMVPHome = compiled.querySelector('.mvp-home');
    const secondMatchMVPAway = compiled.querySelector('.mvp-away');

    expect(secondMatchMVPHome?.textContent).toContain('MVP: Player C1');
    expect(secondMatchMVPAway?.textContent).toContain('MVP: Player D1');
  });

  it('should navigate to match detail when clicked', () => {
    const spy = spyOn(component, 'openMatchDetails');
    const match = component.matches[0];
    const row = fixture.nativeElement.querySelector('.clickable-row');
    row.click();
    expect(spy).toHaveBeenCalledWith(match);
  });
});
