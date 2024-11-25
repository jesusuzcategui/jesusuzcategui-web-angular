import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry, Asset } from 'contentful';
import { Skill } from '../content.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-carousel',
  templateUrl: './skill-carousel.component.html',
  styleUrl: './skill-carousel.component.scss',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SkillCarouselComponent implements OnInit {
  public skills: Entry<Skill>[] = [];

  constructor(private contentfulService: ContentfulService) {}

  async ngOnInit() {
    this.skills = await this.contentfulService.getSkills();
  }

  getLogoUrl(asset: any ): any {
    return asset?.fields?.file?.url || undefined; // Usa un valor predeterminado si el logo no está disponible
  }
}
