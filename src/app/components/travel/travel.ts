import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

interface VisitedCountry {
  id: string;
  label: string;
  x: number;
  y: number;
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
      label: 'The Netherlands',
      x: 42,
      y: 38,
    },
    {
      id: 'germany',
      label: 'Germany',
      x: 45,
      y: 37,
    },
    {
      id: 'belgium',
      label: 'Belgium',
      x: 41,
      y: 39,
    },
    {
      id: 'denmark',
      label: 'Denmark',
      x: 47,
      y: 34,
    },
    {
      id: 'sweden',
      label: 'Sweden',
      x: 50,
      y: 32,
    },
    {
      id: 'greece',
      label: 'Greece',
      x: 52,
      y: 42,
    },
    {
      id: 'italy',
      label: 'Italy',
      x: 48,
      y: 41,
    },
    {
      id: 'washington',
      label: 'Washington',
      x: 18,
      y: 32,
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
