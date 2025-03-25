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
  },
  {
    path: 'suscripciones',
    loadComponent: () => import('./suscripciones/suscripciones.page').then( m => m.SuscripcionesPage)
  },
  {
    path: 'evento',
    loadComponent: () => import('./evento/evento.page').then( m => m.EventoPage)
  },
  {
    path: 'favoritos',
    loadComponent: () => import('./favoritos/favoritos.page').then( m => m.FavoritosPage)
  },
  {
    path: 'configuracion',
    loadComponent: () => import('./configuracion/configuracion.page').then( m => m.ConfiguracionPage)
  },
  {
    path: 'tienda',
    loadComponent: () => import('./tienda/tienda.page').then( m => m.TiendaPage)
  },
  {
    path: 'info-donacion',
    loadComponent: () => import('./info-donacion/info-donacion.page').then( m => m.InfoDonacionPage)
  },
  {
    path: 'agregar-tarjeta',
    loadComponent: () => import('./agregar-tarjeta/agregar-tarjeta.page').then( m => m.AgregarTarjetaPage)
  },



];
