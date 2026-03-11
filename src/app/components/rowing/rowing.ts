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
}