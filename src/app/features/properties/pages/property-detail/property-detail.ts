import { Component, inject } from '@angular/core';
import { PropertyService } from '../../../../core/services/property';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PropertyCard } from '../../../../shared/components/property-card/property-card';

@Component({
  selector: 'app-property-detail',
  imports: [CommonModule, PropertyCard],
  templateUrl: './property-detail.html',
})
export class PropertyDetail {
  route = inject(ActivatedRoute);
  propertyService = inject(PropertyService);
  similarProperties = this.propertyService.getAll().slice(0, 3);

  slug = this.route.snapshot.paramMap.get('slug')!;

  property = this.propertyService.getBySlug(this.slug);
}
