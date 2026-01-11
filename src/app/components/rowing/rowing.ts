import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rowing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rowing.html',
  styleUrls: ['./rowing.css']
})
export class Rowing implements OnInit, OnDestroy {

  /* ------------------------------------------------------------
   * FEATURED CAROUSEL IMAGES
   * ------------------------------------------------------------ */
  featuredImages: string[] = [
    'assets/rowingPhotos/photo1.jpg',
    'assets/rowingPhotos/photo35.jpg',
    'assets/rowingPhotos/photo15.jpg',
    'assets/rowingPhotos/photo26.jpg',
    'assets/rowingPhotos/photo36.jpg',
  ];

  /* ------------------------------------------------------------
   * FULL GALLERY IMAGES
   * ------------------------------------------------------------ */
  galleryImages: string[] = [
    'assets/rowingPhotos/photo2.jpg',
    'assets/rowingPhotos/photo3.jpg',
    'assets/rowingPhotos/photo4.jpg',
    'assets/rowingPhotos/photo5.jpg',
    'assets/rowingPhotos/photo6.jpg',
    'assets/rowingPhotos/photo7.jpg',
    'assets/rowingPhotos/photo9.jpg',
    'assets/rowingPhotos/photo16.jpg',
    'assets/rowingPhotos/photo17.jpg',
    'assets/rowingPhotos/photo28.jpg',
    'assets/rowingPhotos/photo30.jpg',
    'assets/rowingPhotos/photo32.jpg',
    'assets/rowingPhotos/photo34.jpg',
    'assets/rowingPhotos/photo37.jpg',
    'assets/rowingPhotos/photo41.jpg',
    'assets/rowingPhotos/photo12.jpg',
    'assets/rowingPhotos/photo18.jpg',
    'assets/rowingPhotos/photo33.jpg',
    'assets/rowingPhotos/photo8.jpg'
  ];

  /* ------------------------------------------------------------
   * CAROUSEL STATE
   * ------------------------------------------------------------ */
  currentIndex = 0;
  autoplayInterval: any;

  constructor(private cdr: ChangeDetectorRef) {}

  /* ------------------------------------------------------------
   * LIFECYCLE
   * ------------------------------------------------------------ */
  ngOnInit() {
    this.autoplayInterval = setInterval(() => {
      this.nextImage();
      this.cdr.detectChanges();
    }, 4000);
  }

  ngOnDestroy() {
    clearInterval(this.autoplayInterval);
  }

  /* ------------------------------------------------------------
   * CAROUSEL CONTROLS
   * ------------------------------------------------------------ */
  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.featuredImages.length;
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.featuredImages.length) %
      this.featuredImages.length;
  }

  goToImage(index: number) {
    this.currentIndex = index;
  }

  pause() { clearInterval(this.autoplayInterval); }
  
  resume() {
    this.autoplayInterval = setInterval(() => {
      this.nextImage();
      this.cdr.detectChanges();
    }, 4000);
  }

}
