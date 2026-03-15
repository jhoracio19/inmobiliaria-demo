import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyService } from '../../../../core/services/property';
import { PropertyCard } from '../../../../shared/components/property-card/property-card';
import { Property } from '../../../../core/models/property';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [CommonModule, FormsModule, PropertyCard],
  templateUrl: './property-list.html',
})
export class PropertyList {
  propertyService = inject(PropertyService);
  sanitizer = inject(DomSanitizer);

  properties: Property[] = this.propertyService.getAll();
  route = inject(ActivatedRoute);
  mapUrl!: SafeResourceUrl;

  filteredProperties: Property[] = this.properties;

  filterType = '';
  filterBeds = 0;

  applyFilters() {
    this.filteredProperties = this.properties.filter((property) => {
      const matchType = !this.filterType || property.type === this.filterType;

      const matchBeds = !this.filterBeds || property.beds >= this.filterBeds;

      return matchType && matchBeds;
    });
  }

  mapLat = this.properties[0]?.lat ?? 19.041;
  mapLng = this.properties[0]?.lng ?? -98.206;

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const type = params['type'];
      const beds = Number(params['beds']);
      const location = params['location'];

      this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://maps.google.com/maps?q=${this.mapLat},${this.mapLng}&z=13&output=embed`,
      );

      this.filteredProperties = this.properties.filter((property) => {
        const matchType = !type || property.type === type;

        const matchBeds = !beds || property.beds >= beds;

        const matchLocation =
          !location || property.location.toLowerCase().includes(location.toLowerCase());

        return matchType && matchBeds && matchLocation;
      });
    });
  }
}
