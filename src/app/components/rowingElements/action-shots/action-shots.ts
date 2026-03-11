import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-action-shots',
  imports: [],
  templateUrl: './action-shots.html',
  styleUrl: './action-shots.css',
})
export class ActionShots {

  @ViewChild('actionTrack', { static: false })
  actionTrack!: ElementRef<HTMLDivElement>;

  // --- CONFIG ---
  private scrollSpeed = 0.6;
  private autoScrollInterval: any;
  private wheelTimeout: any;

  // --- STATE ---
  private isDragging = false;
  private isUserInteracting = false;
  private dragStartX = 0;
  private scrollStartX = 0;

  // --- CLIPS ---
  baseClips: string[] = [
    'assets/rowingVideos/vid1.mp4',
    'assets/rowingVideos/vid2.mp4',
    'assets/rowingVideos/vid3.mp4',
    'assets/rowingVideos/vid4.mp4'
  ];

  actionClips = [...this.baseClips, ...this.baseClips];


  // --- LIFECYCLE ---
  ngAfterViewInit() {
    setTimeout(() => {
      const el = this.actionTrack.nativeElement;

      // Start in the middle of the duplicated list for seamless looping
      const midpoint = el.scrollWidth / 2;
      el.scrollLeft = midpoint / 2;

      this.startAutoScroll();
    });
  }

  // --- AUTO SCROLL ---
  private startAutoScroll() {
    const el = this.actionTrack.nativeElement;

    this.autoScrollInterval = setInterval(() => {
      if (this.isUserInteracting) return;

      // Move RIGHT → LEFT
      el.scrollLeft -= this.scrollSpeed;

      const midpoint = el.scrollWidth / 2;

      // When we cross the left boundary of the first set,
      // jump forward by one full set (invisible to the user)
      if (el.scrollLeft <= 0) {
        el.scrollLeft += midpoint;
      }
    }, 16);
  }


  // --- DRAG INTERACTION ---
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


  // --- WHEEL INTERACTION ---
  onWheelScroll(event: WheelEvent) {
    const el = this.actionTrack.nativeElement;

    this.isUserInteracting = true;
    el.scrollLeft += event.deltaY;

    clearTimeout(this.wheelTimeout);
    this.wheelTimeout = setTimeout(() => {
      this.isUserInteracting = false;
    }, 600);
  }
}
