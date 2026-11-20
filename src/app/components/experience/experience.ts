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
      meta: 'Full-time · Hybrid · Brooklyn Center, MN',
      bullets: [
        'Developed order fulfillment, vendor document submission, and invoice processing features for a vendor-facing application, working across Angular, ASP.NET Core, and SQL Server.',
        'Designed a rule-based vendor-routing algorithm that evaluates existing assignments, vendor capabilities, contractual relationships, and platform participation to automate order selection.',
        'Built production real-time dashboard notifications using SignalR, alerting internal users when vendors return completed orders and providing contextual navigation directly to the relevant order.',
        'Improved production response times by approximately 25% through SQL query optimization, caching, and backend workflow improvements.',
        'Evaluated proposed product and workflow changes for technical and operational risks, identifying potential bulk-assignment errors and advocating for safer implementation approaches.',
        'Partnered with product and engineering stakeholders to clarify ambiguous requirements, translate business needs into actionable development work, and drive technical decisions amid shifting priorities.',
        'Leveraged GitHub Copilot and enterprise AI tools throughout the development lifecycle for implementation, debugging, pull request reviews, ticket and PBI investigations, requirements analysis, documentation, and development planning.',
        'Contributed to .NET upgrades, dependency maintenance, and Azure DevOps CI/CD improvements to maintain application reliability and deployment workflows.'
      ]
    },
    {
      title: 'Software Support Analyst — AbleNet, Inc.',
      years: '2024 — 2025',
      meta: 'Full-time · Hybrid · Roseville, MN',
      bullets: [
        'Led a cross-functional taskforce during a two-week Jamf outage, designing an alternative device provisioning workflow that maintained distribution of approximately 1,000 assistive communication devices daily while addressing Apple account restrictions, licensing, device lockdown, and insurance-funded deployment requirements without increasing costs for families.',
        'Investigated complex iOS integration issues, partnering with engineering teams and Apple developers to diagnose and resolve production defects.',
        'Identified recurring product issues and streamlined deployment workflows, increasing deployment speed by 20%.'
      ]
    },
    {
      title: 'Lead Supervisor — Sebastian Joe’s',
      years: '2018 — 2024',
      meta: 'Part-time · In Person · Minneapolis, MN',
      bullets: [
        'Led a team in fast-paced retail operations, implemented workflow improvements, and coached team members to improve service quality.',
        'Documented operating procedures to train new hires and streamline store efficiency.'
      ]
    },
    {
      title: 'Undergraduate Peer Advisor — University of Minnesota',
      years: '2023 — 2024',
      meta: 'Part-time · Hybrid · Minneapolis, MN',
      bullets: [
        'Delivered academic advising to diverse student populations and communicated complex information clearly and effectively.',
        'Created structured advising materials to increase student engagement and accessibility.'
      ]
    }
  ];

  leadership = [
    {
      title: 'Member-at-Large, Board of Governors — Minneapolis Rowing Club',
      years: 'Nov 2026 — Present',
      meta: 'Volunteer · Minneapolis, MN',
      bullets: [
        "Elected to the club's governing board, contributing to organizational governance, operational priorities, and member representation.",
        'Bring more than a decade of experience across junior, collegiate, U30, and competitive Masters rowing programs.'
      ]
    },
    {
      title: "Board Member — University of Minnesota Men's Rowing Club",
      years: 'May 2022 — May 2023',
      meta: 'Student Organization · Minneapolis, MN',
      bullets: [
        'Contributed to team leadership and organizational decision-making.',
        'Coordinated public relations, social media, and merchandise, including Instagram management and apparel selection, ordering, and distribution.'
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
        'Internet Programming',
        'Software Eng. I',
        'Intro to Operating Systems',
        'Algs. & Data Str.',
        'Elem Comput Linear Algebra',
        'Machine Architecture and Organization',
        'Intro to Prob & Stat',
        'Adv. Programming Principles',
        'Disc. Structures',
        'Intro to Algorithms & Data Structures',
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
