import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'schedule',
        loadComponent: () => import('./pages/schedule/tasks.component').then(m => m.TasksComponent)
    },
    {
        path: 'team-profile',
        loadComponent: () => import('./pages/team-profile/profile.component').then(m => m.ProfileComponent),
    },
    {
        path: 'my-tasks',
        loadComponent: () => import('./pages/my-tasks/my-tasks.component').then(m => m.MyTasksComponent),
    },
    {
        path: 'forum',
        loadComponent: () => import('./pages/forum/forum.component').then(m => m.ForumComponent),
    },
    {
        path: 'player-comparison',
        loadComponent: () => import('./pages/player-comparison/player-comparison.component').then(m => m.PlayerComparisonComponent),
    },
    {
        path: 'match-detail',
        loadComponent: () => import('./pages/match-detail/match-detail.component').then(m => m.MatchDetailComponent),
    },
    {
        path: 'tactical-board',
        loadComponent: () => import('./pages/tactical-board/tactical-board.component').then(m => m.TacticalBoardComponent),
    },
    {
        path: 'statistics',
        loadComponent: () => import('./pages/statistics/statistics.component').then(m => m.StatisticsComponent),
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
    },
    {
        path: 'signup',
        loadComponent: () => import('./pages/signup/signup.component').then(m => m.SignupComponent),
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
