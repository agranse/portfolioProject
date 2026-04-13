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
      x: 46.5,
      y: 41,
    },
    {
      id: 'germany',
      label: 'Germany',
      x: 47.5,
      y: 42,
    },
    {
      id: 'belgium',
      label: 'Belgium',
      x: 46,
      y: 41.5,
    },
    {
      id: 'denmark',
      label: 'Denmark',
      x: 47.5,
      y: 40,
    },
    {
      id: 'sweden',
      label: 'Sweden',
      x: 48.5,
      y: 39,
    },
    {
      id: 'greece',
      label: 'Greece',
      x: 50,
      y: 45.5,
    },
    {
      id: 'italy',
      label: 'Italy',
      x: 48.5,
      y: 44.5,
    },
    {
      id: 'belize',
      label: 'Belize',
      x: 32.5,
      y: 53,
    },
    {
      id: 'canada',
      label: 'Canada',
      x: 30,
      y: 41,
    },
    {
      id: 'washington',
      label: 'Washington',
      x: 24.5,
      y: 43,
    },
    {
      id: 'oregon',
      label: 'Oregon',
      x: 24.5,
      y: 44,
    },
    {
      id: 'california',
      label: 'California',
      x: 24.5,
      y: 45.5,
    },
    {
      id: 'arizona',
      label: 'Arizona',
      x: 27.5,
      y: 47,
    },
    {
      id: 'new mexico',
      label: 'New Mexico',
      x: 29,
      y: 47,
    },
    {
      id: 'utah',
      label: 'Utah',
      x: 27.5,
      y: 45,
    },
    {
      id: 'colorado',
      label: 'Colorado',
      x: 29,
      y: 45,
    },
    {
      id: 'idaho',
      label: 'Idaho',
      x: 27,
      y: 43,
    },
    {
      id: 'montana',
      label: 'Montana',
      x: 28,
      y: 42.5
    },
    {
      id: 'wyoming',
      label: 'Wyoming',
      x: 28,
      y: 43,
    },
    {
      id: 'north dakota',
      label: 'North Dakota',
      x: 30,
      y: 42.5,
    },
    {
      id: 'south dakota',
      label: 'South Dakota',
      x: 30,
      y: 43,
    },
    {
      id: 'minnesota',
      label: 'Minnesota',
      x: 31,
      y: 43,
    },
    {
      id: 'nebraska',
      label: 'Nebraska',
      x: 30,
      y: 44.5,
    },
    {
      id: 'iowa',
      label: 'Iowa',
      x: 31,
      y: 44,
    },
    {
      id: 'wisconsin',
      label: 'Wisconsin',
      x: 32,
      y: 44,
    },
    {
      id: 'illinois',
      label: 'Illinois',
      x: 32,
      y: 44.5,
    },
    {
      id: 'michigan',
      label: 'Michigan',
      x: 33,
      y: 43,
    },
    {
      id: 'indiana',
      label: 'Indiana',
      x: 32,
      y: 45,
    },
    {
      id: 'kentucky',
      label: 'Kentucky',
      x: 32.5,
      y: 46,
    },
    {
      id: 'tennessee',
      label: 'Tennessee',
      x: 32,
      y: 46.5,
    },
    {
      id: 'alabama',
      label: 'Alabama',
      x: 32,
      y: 47,
    },
    {
      id: 'georgia',
      label: 'Georgia',
      x: 33,
      y: 47,
    },
    {
      id: 'florida',
      label: 'Florida',
      x: 33,
      y: 49,
    },
    {
      id: 'ohio',
      label: 'Ohio',
      x: 33,
      y: 44.5,
    },
    {
      id: 'west virginia',
      label: 'West Virginia',
      x: 34.5,
      y: 45,
    },
    {
      id: 'virginia',
      label: 'Virginia',
      x: 33.5,
      y: 46,
    },
    {
      id: 'DC',
      label: 'District of Columbia',
      x: 33.5,
      y: 45,
    },
    {
      id: 'maryland',
      label: 'Maryland',
      x: 33.5,
      y: 45.5,
    },
    {
      id: 'pennsylvania',
      label: 'Pennsylvania',
      x: 33.5,
      y: 45.5,
    },
    {
      id: 'new york',
      label: 'New York',
      x: 34,
      y: 44,
    },
    {
      id: 'new jersey',
      label: 'New Jersey',
      x: 34.5,
      y: 45,
    },
    {
      id: 'delaware',
      label: 'Delaware',
      x: 34,
      y: 45.5,
    },
    {
      id: 'massachusetts',
      label: 'Massachusetts',
      x: 34.5,
      y: 44.5,
    },
    {
      id: 'cuba',
      label: 'Cuba',
      x: 33.5,
      y: 50.5,
    },
    {
      id: 'bahamas',
      label: 'Bahamas',
      x: 35,
      y: 50,
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
