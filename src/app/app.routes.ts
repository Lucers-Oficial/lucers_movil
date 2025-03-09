import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'donaciones',
    loadComponent: () => import('./donaciones/donaciones.page').then( m => m.DonacionesPage)
  },  {
    path: 'suscripciones',
    loadComponent: () => import('./suscripciones/suscripciones.page').then( m => m.SuscripcionesPage)
  },
  {
    path: 'evento',
    loadComponent: () => import('./evento/evento.page').then( m => m.EventoPage)
  },



];
