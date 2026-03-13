import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-action-shots',
  templateUrl: './action-shots.html',
  styleUrl: './action-shots.css',
})
export class ActionShots implements AfterViewInit {
  @ViewChild('actionTrack', { static: false }) actionTrack!: ElementRef<HTMLDivElement>;
  @ViewChildren('autoVideo') videos!: QueryList<ElementRef<HTMLVideoElement>>;

  private scrollSpeed = 0.6;
  private tailBufferPx = 800;
  private autoScrollInterval: any;
  private wheelTimeout: any;
  private observer?: IntersectionObserver;

  private isDragging = false;
  private isUserInteracting = false;
  private dragStartX = 0;
  private scrollStartX = 0;
  private isAppending = false;

  baseClips = [
    { mp4: 'assets/rowingVideos/vid1.mp4', poster: 'assets/rowingVideos/posters/vid1.jpg' },
    { mp4: 'assets/rowingVideos/vid4.mp4', poster: 'assets/rowingVideos/posters/vid4.jpg' },
    { mp4: 'assets/rowingVideos/vid2.mp4', poster: 'assets/rowingVideos/posters/vid2.jpg' },
    { mp4: 'assets/rowingVideos/vid5.mp4', poster: 'assets/rowingVideos/posters/vid5.jpg' },
    { mp4: 'assets/rowingVideos/vid3.mp4', poster: 'assets/rowingVideos/posters/vid3.jpg' },
  ];

  actionClips = [...this.baseClips, ...this.baseClips, ...this.baseClips, ...this.baseClips, ...this.baseClips];

  ngAfterViewInit() {
    setTimeout(() => {
      const el = this.actionTrack.nativeElement;
      const midpoint = el.scrollWidth / 2;
      el.scrollLeft = midpoint / 2;
      this.startAutoScroll();
    });

    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const video = entry.target as HTMLVideoElement;

        if (entry.isIntersecting) {
          if (!video.firstChild) {
            const webm = video.getAttribute('data-webm');
            const mp4  = video.getAttribute('data-mp4');

            if (webm) {
              const s1 = document.createElement('source');
              s1.src = webm;
              s1.type = 'video/webm';
              video.appendChild(s1);
            }
            if (mp4) {
              const s2 = document.createElement('source');
              s2.src = mp4;
              s2.type = 'video/mp4';
              video.appendChild(s2);
            }
            video.load();
          }

          video.muted = true;
          video.play().catch(() => {/* ignore autoplay block */});
        } else {
          video.pause();
        }
      }
    }, {
      root: this.actionTrack?.nativeElement ?? null,
      rootMargin: '150px',
      threshold: 0.50
    });

    this.videos.forEach(v => this.observer!.observe(v.nativeElement));
  }

  private startAutoScroll() {
    const el = this.actionTrack.nativeElement;
    this.autoScrollInterval = setInterval(() => {
      if (this.isUserInteracting) return;
      el.scrollLeft -= this.scrollSpeed;
      const midpoint = el.scrollWidth / 2;
      if (el.scrollLeft <= 0) el.scrollLeft += midpoint;
    }, 16);
  }

  onDragStart(event: MouseEvent) {
    this.isUserInteracting = true;
    this.isDragging = true;
    const el = this.actionTrack.nativeElement;
    this.dragStartX = event.clientX;
    this.scrollStartX = el.scrollLeft;
    el.classList.add('dragging');
  }

  onDragMove(event: MouseEvent) {
    if (!this.isDragging) return;
    const el = this.actionTrack.nativeElement;
    const delta = event.clientX - this.dragStartX;
    el.scrollLeft = this.scrollStartX - delta;
  }

  onDragEnd() {
    this.isDragging = false;
    this.isUserInteracting = false;
    this.actionTrack.nativeElement.classList.remove('dragging');
  }

  onWheelScroll(event: WheelEvent) {
    const el = this.actionTrack.nativeElement;
    this.isUserInteracting = true;
    el.scrollLeft += event.deltaY;
    clearTimeout(this.wheelTimeout);
    this.wheelTimeout = setTimeout(() => (this.isUserInteracting = false), 600);
  }
}