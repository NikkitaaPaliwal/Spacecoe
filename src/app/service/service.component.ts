import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Entry } from 'contentful';
import { UrlService } from '../url.service';

interface ServiceData {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  services: Entry<any>[] = [];
  
  // Predefined services data
  servicesList: ServiceData[] = [
    {
      icon: 'chart-line',
      title: 'Audit & Assurance',
      description: 'We bring bright minds, effective processes and world-class technologies to deliver exceptional services.'
    },
    {
      icon: 'lightbulb',
      title: 'Consulting',
      description: 'Using the latest technologies, we help businesses prosper with tailored solutions.'
    },
    // Add more services as needed
  ];

  constructor(private urlService: UrlService) {}

  ngOnInit(): void {
    // Fetch services from Contentful
    this.urlService.getserviceEntries().then(services => {
      this.services = services;
    });
  }

  // Method to handle learn more button clicks
  onLearnMore(service: string): void {
    console.log(`Learn more about ${service}`);
    // Add navigation or modal logic here
  }

  // Method to handle card hover animations
  onCardHover(event: MouseEvent): void {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Calculate the position for the hover effect
    const hoverEffect = card.querySelector('.service-hover-effect') as HTMLElement;
    if (hoverEffect) {
      hoverEffect.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(79, 172, 254, 0.2) 0%, rgba(0, 242, 254, 0.1) 50%, transparent 100%)`;
    }
  }
}