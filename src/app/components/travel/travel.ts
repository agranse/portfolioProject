import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

interface VisitedCountry {
  id: string;
  name: string;
  label: string;
  x: number;
  y: number;
  image: string;
  blurb: string;
}

@Component({
  selector: 'app-travel',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './travel.html',
  styleUrl: './travel.css',
})
export class Travel {
  visited: VisitedCountry[] = [
    {
      id: 'netherlands',
      name: 'The Netherlands',
      label: 'Amsterdam',
      x: 42,
      y: 38,
      image: 'assets/travel/netherlands.jpg',
      blurb: 'Soft light on the canals, bikes threading through narrow streets, and water everywhere you turn.',
    },
    {
      id: 'germany',
      name: 'Germany',
      label: 'Berlin',
      x: 45,
      y: 37,
      image: 'assets/travel/germany.jpg',
      blurb: 'Concrete, glass, and ghosts of walls—cafés tucked between monuments and quiet memorials.',
    },
    {
      id: 'belgium',
      name: 'Belgium',
      label: 'Bruges',
      x: 41,
      y: 39,
      image: 'assets/travel/belgium.jpg',
      blurb: 'Cobblestones, still water, and the feeling that the whole town exhales at dusk.',
    },
    {
      id: 'denmark',
      name: 'Denmark',
      label: 'Copenhagen',
      x: 47,
      y: 34,
      image: 'assets/travel/denmark.jpg',
      blurb: 'Harbor air, clean lines, and bikes gliding past warm windows on cold nights.',
    },
    {
      id: 'sweden',
      name: 'Sweden',
      label: 'Stockholm',
      x: 50,
      y: 32,
      image: 'assets/travel/sweden.jpg',
      blurb: 'Bridges between islands, pale stone, and water that feels like part of the architecture.',
    },
    {
      id: 'greece',
      name: 'Greece',
      label: 'Athens',
      x: 52,
      y: 42,
      image: 'assets/travel/greece.jpg',
      blurb: 'Marble ruins under harsh sun, alleyways that smell like citrus and grilled food.',
    },
    {
      id: 'italy',
      name: 'Italy',
      label: 'Florence',
      x: 48,
      y: 41,
      image: 'assets/travel/italy.jpg',
      blurb: 'Terracotta roofs, river reflections, and museums that feel like time capsules.',
    },
    {
      id: 'seattle',
      name: 'USA',
      label: 'Seattle',
      x: 18,
      y: 32,
      image: 'assets/travel/seattle.jpg',
      blurb: 'Rain on the Sound, ferry horns, and coffee steam fogging up cold windows.',
    },
  ];

  active: VisitedCountry | null = null;

  open(country: VisitedCountry) {
    this.active = country;
  }

  close() {
    this.active = null;
  }
}
