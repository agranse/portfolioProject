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
          title: 'Languages',
          tags: [
            'C#',
            'TypeScript',
            'JavaScript',
            'SQL',
            'Python',
            'Java',
            'C/C++'
          ]
        },
        {
          title: 'Frameworks & Libraries',
          tags: [
            '.NET',
            'ASP.NET Core',
            'Angular',
            'Node.js',
            'Express.js'
          ]
        },
        {
          title: 'Databases',
          tags: [
            'Microsoft SQL Server',
            'MySQL'
          ]
        },
        {
          title: 'AI & Developer Tools',
          tags: [
            'GitHub Copilot',
            'Visual Studio',
            'Git',
            'GitHub',
            'Azure DevOps',
            'Postman',
            'Jest'
          ]
        },
        {
          title: 'DevOps & Technologies',
          tags: [
            'CI/CD',
            'Docker',
            'Linux',
            'REST APIs',
            'SignalR'
          ]
        },
        {
          title: 'Engineering Practices',
          tags: [
            'Object-Oriented Programming',
            'Software Design Patterns',
            'Agile/Scrum'
          ]
        }
      ]
    },
    {
      title: 'Professional Skills',
      groups: [
        {
          title: 'Collaboration & Communication',
          tags: [
            'Cross-Functional Collaboration',
            'Stakeholder Communication',
            'Requirements Analysis',
            'Technical Documentation',
            'Technical Support'
          ]
        },
        {
          title: 'Engineering & Problem-Solving',
          tags: [
            'Debugging & Troubleshooting',
            'Production Support',
            'Problem-Solving',
            'Technical Decision-Making',
            'Process Improvement'
          ]
        },
        {
          title: 'Project & Delivery',
          tags: [
            'Agile Development',
            'Sprint Planning',
            'Prioritization',
            'Workflow Optimization',
            'CI/CD Workflows'
          ]
        }
      ]
    },
    {
      title: 'Academic Skills',
      groups: [
        {
          title: 'Computer Science Foundations',
          tags: [
            'Algorithms & Data Structures',
            'Operating Systems',
            'Database Systems',
            'Software Engineering',
            'Machine Architecture',
            'Software Design Patterns'
          ]
        },
        {
          title: 'Historical & Analytical Thinking',
          tags: [
            'Cultural Evolution',
            'Material Culture Analysis',
            'Archaeological Interpretation',
            'Historical Research',
            'Research Methodology'
          ]
        },
        {
          title: 'Interdisciplinary Strengths',
          tags: [
            'Systems Thinking',
            'Pattern Recognition',
            'Qualitative & Quantitative Analysis',
            'Critical Thinking',
            'Long-Term Analysis'
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
