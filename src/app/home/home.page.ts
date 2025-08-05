import { Component } from '@angular/core';
import { IonCheckbox, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCheckbox, IonContent, IonHeader, IonTitle, IonToolbar],
})
export class HomePage {
  constructor() {}
}
