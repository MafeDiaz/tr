import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-homme',
  templateUrl: './homme.page.html',
  styleUrls: ['./homme.page.scss'],
})
export class HommePage {
  constructor(private router: Router) {} // Inyecta Router en el constructor

  // Define el método goToAudioPlayerPage
  goToAudioPlayerPage() {
    this.router.navigate(['/reproductor-audio']); // Navega a la página deseada
  }

  goToDashboardPage() {
    this.router.navigate(['/daschboard']);
  }

}

