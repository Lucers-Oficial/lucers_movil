import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-agregar-tarjeta',
  templateUrl: './agregar-tarjeta.page.html',
  styleUrls: ['./agregar-tarjeta.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AgregarTarjetaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
