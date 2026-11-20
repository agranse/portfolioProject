import { Component } from '@angular/core';

interface TimelineEntry {
  year: number;
  text: string[];
}

@Component({
  selector: 'app-timeline',
  imports: [],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css',
})

export class Timeline {
  
  timeline: TimelineEntry[] = [
    {
      year: 2026,
      text: [
        "Earned 3rd place at the Head of the Charles in the Men's Senior Master 4+ for the second consecutive year.",
        "Won 1st place in the Women's Open 4+ at Mississippi Sprints, overcoming a one-length deficit at halfway.",
        "Elected to the Minneapolis Rowing Club Board of Governors as a Member-at-Large, contributing to club governance and organizational priorities."
      ]
    },
    {
      year: 2025,
      text: [
        "Earned 3rd place at the Head of the Charles in the Men's Senior Master 4+.",
        "Passed 7 boats through decisive overtakes and precise steering in a high-traffic field."
      ]
    },
    {
      year: 2024,
      text: [
        "Competed at the Head of the Charles in the Men's Club 4+ with University of Minnesota alumni.",
        "Earned 2nd place at Head of the Mississippi in the Men's Open 8+ with University of Minnesota alumni.",
        "Won 2 gold medals at the North West International Rowing Association Championships.",
        "Won 3 gold medals at the Duluth International Regatta across men's and women's events."
      ]
    },
    {
      year: 2022,
      text: [
        "Competed at the Bald Eagle Collegiate Invite, winning gold in the Men's Varsity 4+ B and Men's Varsity 8+ B.",
        "Defeated the A boat in the Men's Varsity 4+ B by 3 seconds.",
        "Served on the University of Minnesota Men's Rowing Club board, coordinating public relations, social media, and team merchandise."
      ]
    },
    {
      year: 2021,
      text: [
        "Won gold in the Men's Varsity 8+ B at the Bald Eagle Collegiate Invite.",
        "Helped secure the University of Minnesota men's rowing program's first-ever trophy at the regatta as a sophomore coxswain."
      ]
    },
    {
      year: 2019,
      text: [
        "Competed at the Head of the Charles in the Women's Senior Master 4+.",
        "Continued serving as a junior rowing team captain."
      ]
    },
    {
      year: 2018,
      text: [
        "Competed at the Head of the Charles in the Women's Grand Master 4+.",
        "Selected as junior rowing team captain and voted team MVP."
      ]
    },
    {
      year: 2016,
      text: [
        "Began rowing with Minneapolis Rowing Club's junior program.",
        "Started developing experience across sweep and sculling boats."
      ]
    }
  ];
}
