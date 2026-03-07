import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

interface SkillGroup {
  title: string;
  tags: string[];
}

interface SkillCategory {
  title: string;
  groups: SkillGroup[];
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  animations: [
    trigger('fadeContent', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(12px)' }),
        animate('400ms ease', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease', style({ opacity: 0, transform: 'translateY(12px)' }))
      ])
    ])
  ]
})
export class Skills {
  activeTab: number | null = null;
  activeSkillTitle = '';
  activeSkillGroups: SkillGroup[] = [];

  private readonly categories: SkillCategory[] = [
    {
      title: 'Technical Skills',
      groups: [
        {
          title: 'Languages & Frameworks',
          tags: [
            'Angular','TypeScript','C#','MS SQL','JavaScript','HTML & CSS','SCSS',
            'RxJS','ASP.NET','ExpressJS','Node.js','Java','C/C++','Python','Embedded C'
          ]
        },
        {
          title: 'Testing & Quality',
          tags: [
            'Unit Testing','Integration Testing','Debugging & Diagnostics',
            'Code Reviews','Performance Optimization'
          ]
        },
        {
          title: 'Tools & Platforms',
          tags: [
            'Azure DevOps','Git & GitHub','Visual Studio','VS Code',
            'Postman','Docker','Linux'
          ]
        },
        {
          title: 'UI/UX & Frontend Craft',
          tags: ['Responsive Design','Component Architecture','Design Systems']
        }
      ]
    },
    {
      title: 'Professional Skills',
      groups: [
        {
          title: 'Collaboration & Communication',
          tags: [
            'Cross‑Team Collaboration','Client Communication','Technical Support',
            'Mentorship','Requirements Gathering','Technical Documentation',
            'Time Management','Prioritization'
          ]
        },
        {
          title: 'Agile & Delivery',
          tags: ['Scrum','Sprint Planning','CI/CD Workflows','Iterative Development']
        },
        {
          title: 'Problem‑Solving & Ownership',
          tags: ['Debugging','Process Improvement','Production Deployment']
        }
      ]
    },
    {
      title: 'Academic Skills',
      groups: [
        {
          title: 'Computer Science Foundations',
          tags: [
            'Algorithms','Operating Systems','Database Systems',
            'Software Engineering','Machine Architecture','Software Design Patterns'
          ]
        },
        {
          title: 'Historical & Analytical Thinking',
          tags: [
            'Cultural Evolution','Material Culture Analysis',
            'Archaeological Interpretation','Research Methodology'
          ]
        },
        {
          title: 'Interdisciplinary Strengths',
          tags: [
            'Systems Thinking','Pattern Recognition',
            'Qualitative + Quantitative Synthesis','Long‑Term Analysis'
          ]
        }
      ]
    }
  ];

  selectTab(index: number) {
    this.activeTab = this.activeTab === index ? null : index;

    if (this.activeTab !== null) {
      const category = this.categories[this.activeTab];
      this.activeSkillTitle = category.title;
      this.activeSkillGroups = category.groups;
    }
  }
}
