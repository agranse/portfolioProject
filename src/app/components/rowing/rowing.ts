import {
  Component,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
  OnInit,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineEntry {
  year: number;
  text: string[];
}

@Component({
  selector: 'app-rowing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rowing.html',
  styleUrls: ['./rowing.css']
})
export class Rowing implements OnInit, AfterViewInit, OnDestroy {

  /* ------------------------------------------------------------
   * ACTION SHOTS — HORIZONTAL SCROLL CLIPS
   * ------------------------------------------------------------ */
  actionClips: string[] = [
    'assets/rowingVideos/video3_fixed.mp4',
    'assets/rowingVideos/video1_fixed.mp4',
    'assets/rowingVideos/video4_fixed.mp4',
    'assets/rowingVideos/video5_fixed.mp4',
    'assets/rowingVideos/video6_fixed.mp4',
    'assets/rowingVideos/video7_fixed.mp4'
  ];

  @ViewChild('actionTrack', { static: false })
  actionTrack!: ElementRef<HTMLDivElement>;

  private isDragging = false;
  private dragStartX = 0;
  private scrollStartX = 0;

  private autoScrollInterval: any;
  private wheelTimeout: any;
  isUserInteracting = false;

  /* ------------------------------------------------------------
   * FEATURED CAROUSEL IMAGES
   * ------------------------------------------------------------ */
  featuredImages: string[] = [
    'assets/rowingPhotos/photo1.jpg',
    'assets/rowingPhotos/photo35.jpg',
    'assets/rowingPhotos/photo15.jpg',
    'assets/rowingPhotos/photo26.jpg',
    'assets/rowingPhotos/photo36.jpg'
  ];

  currentIndex = 0;
  private autoplayInterval: any;

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
   * TIMELINE DATA
   * ------------------------------------------------------------ */
  timeline: TimelineEntry[] = [
    {
      year: 2025,
      text: [
        "Raced at the Head of the Charles in Boston, in the Men's Senior Master 4+.",
        "Passed 7 boats on one of the world's most challenging courses.",
        "Medaled at the world's largest regatta for the first time in my rowing career."
      ]
    },
    {
      year: 2024,
      text: [
        "Raced at the Head of the Charles in the Men's Club 4+.",
        "Competed with fellow University of Minnesota alumni."
      ]
    },
    {
      year: 2022,
      text: [
        "Raced at the Head of the Charles in the Men's Club 4+.",
        "Raced at the Bald Eagle Invitational, winning 2 gold medals and bringing home 2 trophies."
      ]
    },
    {
      year: 2021,
      text: [
        "Raced at the Bald Eagle Invitational.",
        "Won gold and brought home the team's first trophy in the history of the event."
      ]
    },
    {
      year: 2019,
      text: [
        "Raced at the Head of the Charles in the Women's Senior Master 4+ and Women's Grand Master 4+.",
        "Voted junior rowing team captain again."
      ]
    },
    {
      year: 2018,
      text: [
        "Voted junior rowing team captain.",
        "Voted junior rowing team MVP."
      ]
    },
    {
      year: 2016,
      text: [
        "Started rowing and joined the junior rowing team."
      ]
    }
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  /* ------------------------------------------------------------
   * LIFECYCLE
   * ------------------------------------------------------------ */
  ngOnInit() {
    this.startCarouselAutoplay();
  }

  ngAfterViewInit() {
    this.startAutoScroll();
    this.initFadeUpObserver();
  }

  ngOnDestroy() {
    clearInterval(this.autoplayInterval);
    clearInterval(this.autoScrollInterval);
    clearTimeout(this.wheelTimeout);
  }

  /* ------------------------------------------------------------
   * CAROUSEL CONTROLS
   * ------------------------------------------------------------ */
  private startCarouselAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextImage();
      this.cdr.detectChanges();
    }, 4000);
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

  /* ------------------------------------------------------------
   * ACTION SHOTS — DRAG + WHEEL + INFINITE DRIFT
   * ------------------------------------------------------------ */

  onDragStart(event: MouseEvent) {
    if (!this.actionTrack) return;

    this.isUserInteracting = true;
    this.isDragging = true;

    this.dragStartX = event.clientX;
    this.scrollStartX = this.actionTrack.nativeElement.scrollLeft;

    this.actionTrack.nativeElement.classList.add('dragging');
  }

  onDragMove(event: MouseEvent) {
    if (!this.isDragging || !this.actionTrack) return;

    const delta = event.clientX - this.dragStartX;
    this.actionTrack.nativeElement.scrollLeft = this.scrollStartX - delta;
  }

  onDragEnd() {
    if (!this.actionTrack) return;

    this.isDragging = false;
    this.isUserInteracting = false;

    this.actionTrack.nativeElement.classList.remove('dragging');
  }

  onWheelScroll(event: WheelEvent) {
    if (!this.actionTrack) return;

    this.isUserInteracting = true;
    this.actionTrack.nativeElement.scrollLeft += event.deltaY;

    clearTimeout(this.wheelTimeout);
    this.wheelTimeout = setTimeout(() => {
      this.isUserInteracting = false;
    }, 600);
  }

  /* ------------------------------------------------------------
   * INFINITE AUTO‑DRIFT LOOP
   * ------------------------------------------------------------ */
  private startAutoScroll() {
    if (!this.actionTrack) return;

    const track = this.actionTrack.nativeElement;
    const speed = 0.6;

    this.autoScrollInterval = setInterval(() => {
      if (this.isUserInteracting) return;

      const atEnd =
        track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;

      track.scrollLeft = atEnd ? 0 : track.scrollLeft + speed;
    }, 16); // ~60fps
  }

  /* ------------------------------------------------------------
   * FADE-UP OBSERVER
   * ------------------------------------------------------------ */
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
