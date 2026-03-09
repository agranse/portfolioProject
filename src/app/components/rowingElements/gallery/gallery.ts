import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  selected: number | null = null;
  galleryImages: string[] = [
    'assets/rowingPhotos/photo26.jpg',
    'assets/rowingPhotos/photo36.jpg',
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

  getColumnCount(): number {
    const grid = document.querySelector('.masonry-grid');
    if (!grid) return 3; // fallback
    const columnWidth = 220; // same as your CSS
    const totalWidth = grid.clientWidth;
    return Math.max(1, Math.floor(totalWidth / columnWidth));
  }

  getCenterIndex(): number {
    const columns = this.getColumnCount();
    const centerColumn = Math.floor(columns / 2);
    const itemsPerColumn = Math.ceil(this.galleryImages.length / columns);
    return centerColumn * itemsPerColumn;
  }

  toggle(i: number) {
    if (this.selected === i) {
      this.selected = null;
      return;
    }
    const centerIndex = Math.floor(this.galleryImages.length / 2);
    const img = this.galleryImages.splice(i, 1)[0];
    this.galleryImages.splice(centerIndex, 0, img);
    this.selected = centerIndex;
  }
}
