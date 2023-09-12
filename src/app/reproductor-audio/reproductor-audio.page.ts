import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-reproductor-audio',
  templateUrl: './reproductor-audio.page.html',
  styleUrls: ['./reproductor-audio.page.scss'],
})
export class ReproductorAudioPage {
  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef;
  audioSrc: string = '/assets/LP - Lost On You (Live).mp3'; // Ruta del archivo de audio actual
  isPlaying: boolean = false;
  currentTime: number = 0;
  duration: number = 0;

  // Lista de canciones
  songs = [
    { title: 'Back To Black', src: '/assets/Amy Winehouse - Back To Black.mp3' },
    { title: 'Do I Wanna Know ', src: '/assets/Arctic Monkeys - Do I Wanna Know  (Official Video).mp3' },
    { title: 'Cafuné', src: '/assets/Micro TDH - Cafuné (Vídeo Oficial).mp3' },
    { title: 'Lost On You', src: '/assets/LP - Lost On You (Live).mp3' },
    // Agrega más canciones según sea necesario
  ];

  constructor() { }

  ionViewDidEnter() {
    this.audioPlayer.nativeElement.addEventListener('timeupdate', () => {
      this.currentTime = this.audioPlayer.nativeElement.currentTime;
      this.duration = this.audioPlayer.nativeElement.duration;
    });

    this.audioPlayer.nativeElement.addEventListener('ended', () => {
      this.isPlaying = false;
      this.currentTime = 0;
    });
  }

  playAudio() {
    this.audioPlayer.nativeElement.play();
    this.isPlaying = true;
  }

  pauseAudio() {
    this.audioPlayer.nativeElement.pause();
    this.isPlaying = false;
  }

  restartAudio() {
    this.audioPlayer.nativeElement.currentTime = 0;
  }

  seekAudio() {
    const newTime = (this.currentTime / this.duration) * this.audioPlayer.nativeElement.duration;
    this.audioPlayer.nativeElement.currentTime = newTime;
  }
  selectSong(song: any) {
    this.audioSrc = song.src;
    this.playAudio();
  }
}
