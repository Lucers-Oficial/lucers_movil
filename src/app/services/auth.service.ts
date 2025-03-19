import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  /**
   * Registra un nuevo usuario utilizando email y contraseña.
   * @param email Dirección de correo del usuario.
   * @param password Contraseña para el usuario.
   * @returns Observable con el resultado del registro.
   */
  signUp(email: string, password: string): Observable<any> {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  /**
   * Inicia sesión con email y contraseña.
   * @param email Dirección de correo del usuario.
   * @param password Contraseña del usuario.
   * @returns Observable con el resultado del inicio de sesión.
   */
  signIn(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  /**
   * Cierra la sesión del usuario actual.
   * @returns Observable que se completa cuando la sesión se cierra.
   */
  signOut(): Observable<any> {
    return from(signOut(this.auth));
  }
}


