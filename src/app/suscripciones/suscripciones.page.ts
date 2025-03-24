import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-suscripciones',
  templateUrl: './suscripciones.page.html',
  styleUrls: ['./suscripciones.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class SuscripcionesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
