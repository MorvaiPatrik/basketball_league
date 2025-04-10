import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchDetailComponent } from './match-detail.component';
import { provideRouter } from '@angular/router';

describe('MatchDetailComponent', () => {
  let component: MatchDetailComponent;
  let fixture: ComponentFixture<MatchDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchDetailComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(MatchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the match detail component', () => {
    expect(component).toBeTruthy();
  });

  it('should display match details if match is provided', () => {
    component.match = {
      homeTeam: 'Csapat A',
      awayTeam: 'Csapat B',
      location: 'Budapest Aréna',
      matchDate: new Date('2025-05-01T19:00:00'),
      isFinished: true
    };

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Csapat A vs Csapat B');
  });
});
