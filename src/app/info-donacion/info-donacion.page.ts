import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-info-donacion',
  templateUrl: './info-donacion.page.html',
  styleUrls: ['./info-donacion.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class InfoDonacionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
