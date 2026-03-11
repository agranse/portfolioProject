import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-featured-moments',
  imports: [],
  templateUrl: './featured-moments.html',
  styleUrl: './featured-moments.css',
})
export class FeaturedMoments {
  ngOnInit() {
    this.startCarouselAutoplay();
  }

  ngAfterViewInit() {
    this.initFadeUpObserver();
  }

  ngOnDestroy() {
    clearInterval(this.autoplayInterval);
  }

  featuredImages: string[] = [
    'assets/rowingPhotos/photo1.jpg',
    'assets/rowingPhotos/photo15.jpg',
    'assets/rowingPhotos/photo30.jpg'
  ];
constructor(private cdr: ChangeDetectorRef) {}
  currentIndex = 0;
  private autoplayInterval: any;

  private startCarouselAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextImage();
      this.cdr.detectChanges();
    }, 3000);
  }

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

  pause() {
    clearInterval(this.autoplayInterval);
  }

  resume() {
    this.startCarouselAutoplay();
  }
    private initFadeUpObserver() {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up-visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    document
      .querySelectorAll('section')
      .forEach(sec => observer.observe(sec));
  }
}
