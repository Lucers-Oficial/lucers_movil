import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service'; // Ajusta la ruta según la ubicación real
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  /**
   * Llama al método de login del AuthService para autenticar al usuario.
   * En caso de éxito redirige a la página principal (u otra de tu elección).
   */
  login(): void {
    this.errorMessage = ''; // Limpiar cualquier mensaje de error previo
    this.authService.signIn(this.email, this.password).subscribe({
      next: (userCredential) => {
        console.log('Inicio de sesión exitoso:', userCredential);
        // Redireccionar a otra página tras el login exitoso
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Error al iniciar sesión:', error);
        this.errorMessage = error.message;
      }
    });
  }
}


