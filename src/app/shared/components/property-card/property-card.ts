import { Component, Input } from '@angular/core';
import { Property } from '../../../core/models/property';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-card',
  imports: [RouterModule, CommonModule],
  templateUrl: './property-card.html',
})
export class PropertyCard {
  @Input() property!: Property;
}
