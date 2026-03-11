import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  selected: number | null = null;
  galleryImages: string[] = [
    // 'assets/rowingPhotos/photo1.jpg',
    'assets/rowingPhotos/photo2.jpg',
    'assets/rowingPhotos/photo3.jpg',
    'assets/rowingPhotos/photo12.jpg',
    'assets/rowingPhotos/photo5.jpg',
    'assets/rowingPhotos/photo6.jpg',
    'assets/rowingPhotos/photo29.jpg',
    'assets/rowingPhotos/photo7.jpg',
    'assets/rowingPhotos/photo4.jpg',
    'assets/rowingPhotos/photo9.jpg',
    'assets/rowingPhotos/photo10.jpg',
    // 'assets/rowingPhotos/photo11.jpg',
    'assets/rowingPhotos/photo18.jpg',
    'assets/rowingPhotos/photo28.jpg',
    'assets/rowingPhotos/photo14.jpg',
    // 'assets/rowingPhotos/photo15.jpg',
    'assets/rowingPhotos/photo16.jpg',
    'assets/rowingPhotos/photo17.jpg',
    'assets/rowingPhotos/photo8.jpg',
    'assets/rowingPhotos/photo20.jpg',
    'assets/rowingPhotos/photo27.jpg',
    'assets/rowingPhotos/photo21.jpg',
    'assets/rowingPhotos/photo22.jpg',
    // 'assets/rowingPhotos/photo23.jpg',
    'assets/rowingPhotos/photo24.jpg',
    'assets/rowingPhotos/photo25.jpg',
    'assets/rowingPhotos/photo26.jpg',
    'assets/rowingPhotos/photo19.jpg',
    'assets/rowingPhotos/photo13.jpg',
    // 'assets/rowingPhotos/photo30.jpg'
  ];

  
  toggle(i: number) {
    const wasSelected = this.selected === i;
    this.selected = wasSelected ? null : i;

    // Smoothly bring the clicked item to center of viewport.
    // We use a microtask to run after the DOM updates (class changes).
    queueMicrotask(() => {
      const el = document.querySelector<HTMLElement>(`.masonry-item[data-i="${i}"]`);
      el?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    });
  }

  // ---------- Optional: keyboard support for better UX ----------

  @HostListener('window:keydown', ['$event'])
  onKeydown(e: KeyboardEvent) {
    if (this.selected === null) {
      // If nothing is selected, only react to Enter on a focused item if you add focus handling.
      return;
    }

    // Close on Escape
    if (e.key === 'Escape') {
      this.selected = null;
      return;
    }

    // Navigate selection with arrow keys
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      this.moveSelection(1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      this.moveSelection(-1);
    }
  }

  private moveSelection(delta: number) {
    if (this.selected === null) return;

    const total = this.galleryImages.length;
    let next = this.selected + delta;

    // Clamp to bounds (or wrap if you prefer)
    if (next < 0) next = 0;
    if (next > total - 1) next = total - 1;

    this.selected = next;

    // Scroll the newly selected tile into view
    queueMicrotask(() => {
      const el = document.querySelector<HTMLElement>(`.masonry-item[data-i="${next}"]`);
      el?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    });
  }

}
