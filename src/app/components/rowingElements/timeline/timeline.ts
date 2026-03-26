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
      year: 2025,
      text: [
        "Raced at the Head of the Charles in Boston, in the Men's Senior Master 4+.",
        "Passed 7 boats on one of the world's most challenging courses.",
        "Medaled at the world's largest and most technically demanding regatta for the first time in my rowing career."
      ]
    },
    {
      year: 2024,
      text: [
        "Raced at the Head of the Charles in the Men's Club 4+ with fellow University of Minnesota alumni.",
        "Secured 2 gold medals at the North West International Rowing Association Championships in Kenora, Ontario.",
        "Won 3 gold medals at the Duluth International Regatta."
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
        "Raced at the Bald Eagle Invitational. Won gold as sophomore coxswain; secured program’s first-ever trophy at this regatta."
      ]
    },
    {
      year: 2019,
      text: [
        "Raced at the Head of the Charles in the Women's Senior Master 4+.",
        "Voted junior rowing team captain again."
      ]
    },
    {
      year: 2018,
      text: [
        "Raced at the Head of the Charles in the Women's Grand Master 4+.",
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
}
