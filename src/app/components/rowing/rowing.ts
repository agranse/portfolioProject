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
import { ActionShots } from "../rowingElements/action-shots/action-shots";
import { Achievements } from "../rowingElements/achievements/achievements";
import { FeaturedMoments } from "../rowingElements/featured-moments/featured-moments";
import { Gallery } from "../rowingElements/gallery/gallery";
import { Timeline } from "../rowingElements/timeline/timeline";
import { Youtube } from "../rowingElements/youtube/youtube";



@Component({
  selector: 'app-rowing',
  standalone: true,
  imports: [CommonModule, ActionShots, Achievements, FeaturedMoments, Gallery, Timeline, Youtube],
  templateUrl: './rowing.html',
  styleUrls: ['./rowing.css']
})
export class Rowing {
  showActionShots = false;
  showFeatured = false;
  showGallery = false;

  ngAfterViewInit() {
    this.observeSection('.action-shots-section', () => this.showActionShots = true);
    this.observeSection('.featured-section', () => this.showFeatured = true);
    this.observeSection('.gallery-section', () => this.showGallery = true);
  }

  private observeSection(selector: string, callback: () => void) {
    const el = document.querySelector(selector);
    if (!el) return;

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        callback();
        observer.disconnect();
      }
    });

    observer.observe(el);
  }
}