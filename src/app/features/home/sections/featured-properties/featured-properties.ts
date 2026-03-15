import { Component, inject } from '@angular/core';
import { PropertyService } from '../../../../core/services/property';
import { PropertyCard } from '../../../../shared/components/property-card/property-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-properties',
  imports: [PropertyCard, CommonModule],
  templateUrl: './featured-properties.html',
})
export class FeaturedProperties {
  propertyService = inject(PropertyService);

  properties = this.propertyService.getAll();
}
