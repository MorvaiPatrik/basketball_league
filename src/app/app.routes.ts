import { Routes } from '@angular/router';
import { authGuard, publicGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'schedule',
        loadComponent: () => import('./pages/schedule/tasks.component').then(m => m.TasksComponent),
        // Nincs guard, mindenki eléri
    },
    {
        path: 'team-profile',
        loadComponent: () => import('./pages/team-profile/profile.component').then(m => m.ProfileComponent),
        // Nincs guard, mindenki eléri
    },
    {
        path: 'my-tasks',
        loadComponent: () => import('./pages/my-tasks/my-tasks.component').then(m => m.MyTasksComponent),
        canActivate: [authGuard]
    },
    {
        path: 'forum',
        loadComponent: () => import('./pages/forum/forum.component').then(m => m.ForumComponent),
        canActivate: [authGuard]
    },
    {
        path: 'player-comparison',
        loadComponent: () => import('./pages/player-comparison/player-comparison.component').then(m => m.PlayerComparisonComponent),
        // Nincs guard, mindenki eléri
    },
    {
        path: 'match-detail',
        loadComponent: () => import('./pages/match-detail/match-detail.component').then(m => m.MatchDetailComponent),
        // Nincs guard, mindenki eléri
    },
    {
        path: 'tactical-board',
        loadComponent: () => import('./pages/tactical-board/tactical-board.component').then(m => m.TacticalBoardComponent),
        // Nincs guard, mindenki eléri
    },
    {
        path: 'statistics',
        loadComponent: () => import('./pages/statistics/statistics.component').then(m => m.StatisticsComponent),
        // Nincs guard, mindenki eléri
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
        canActivate: [publicGuard]
    },
    {
        path: 'signup',
        loadComponent: () => import('./pages/signup/signup.component').then(m => m.SignupComponent),
        canActivate: [publicGuard]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        loadComponent: () => import('./shared/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent),
    },
];
