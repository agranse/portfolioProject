import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrls: ['./experience.css'],
  imports: [ CommonModule ]
})
export class Experience {

  openIndex: number | null = null;

  toggle(i: number) {
    this.openIndex = this.openIndex === i ? null : i;
  }

  experience = [
    {
      title: 'Application Developer — Cogency Global Inc.',
      years: '2025 — Present',
      meta: 'Full‑time · Hybrid · Brooklyn Center, MN',
      bullets: [
        'Developed and delivered high-performance solutions using Angular, ASP.NET, C#, JavaScript, and MS SQL Server',
        'Collaborated in Scrum ceremonies to meet sprint goals and reduce delivery timelines',
        'Researched emerging technologies and contributed to improved development practices',
        'Used Azure DevOps, Visual Studio, and Git to manage code, deployments, and CI/CD workflows'
      ]
    },
    {
      title: 'Software Support Analyst — AbleNet, Inc.',
      years: '2024 — 2025',
      meta: 'Full‑time · Hybrid · Roseville, MN',
      bullets: [
        'Supported assistive technology software across iOS platforms',
        'Acted as a liaison between technical teams and external clients',
        'Drove process improvements and identified usability issues through user feedback'
      ]
    },
    {
      title: 'Lead Supervisor — Sebastian Joe’s',
      years: '2018 — 2024',
      meta: 'Part‑time · In Person · Minneapolis, MN',
      bullets: [
        'Led a team in fast-paced retail operations and coached team members',
        'Documented operating procedures to train new hires and improve efficiency'
      ]
    },
    {
      title: 'Undergraduate Peer Advisor — University of Minnesota',
      years: '2023 — 2024',
      meta: 'Part‑time · Hybrid · Minneapolis, MN',
      bullets: [
        'Delivered academic advising to diverse student populations',
        'Created structured advising materials to increase engagement and accessibility'
      ]
    }
  ];

  education = [
    {
      title: 'Computer Science — University of Minnesota',
      meta: 'Focus on software engineering, algorithms, systems, and human‑centered computing',
      bullets: [
        'Program Design & Development',
        'Operating Systems',
        'Internet Prgramming',
        'Software Eng. I',
        'Intro to Operating Systems',
        'Algs. & Data Str.',
        'Elem Comput Linear Algebra',
        'Machine Architechture and Org',
        'Intro to Prob & Stat',
        'Adv. Programming Principles',
        'Disc. Structures',
        'Into Algs & Data Str.',
        'Phys for Sci and Engr I',
        'Calculus II',
        'Intro to Programming Concepts'
      ]
    },
    {
      title: 'History — University of Minnesota',
      meta: 'Emphasis on Prehistoric European History, cultural evolution, and archaeological interpretation',
      bullets: [
        'Archaeology of Northern Europe',
        'Atlantic Revolutions',
        'Hands-On History: Seminar',
        'Pathways to Civilization',
        'History of the Premodern Book',
        'The Hundred Years War',
        'Latin Am 1825-Pres',
        'Anc. Civ: Rome',
        'Global Environmental History',
        'Intro to Med Hist',
        'Arch. of Prehistoric Europe',
        'Intermediate Latin Poetry',
        'World of Greece',
        'Intermediate Latin Prose'
      ]
    }
  ];
}
