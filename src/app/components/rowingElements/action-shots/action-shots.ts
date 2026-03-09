import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-action-shots',
  imports: [],
  templateUrl: './action-shots.html',
  styleUrl: './action-shots.css',
})
export class ActionShots {

  ngAfterViewInit() {
    this.startAutoScroll();
  }

  startAutoScroll() {
    if (!this.actionTrack) return;

    this.autoScrollInterval = setInterval(() => {
      if (this.isUserInteracting) return;

      const el = this.actionTrack.nativeElement;
      el.scrollLeft += 0.6;

      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
        el.scrollLeft = 0;
      }
    }, 16);
  }

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
}
