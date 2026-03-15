import { Injectable } from '@angular/core';
import { Property } from '../models/property';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  properties: Property[] = [
    {
      id: '1',
      title: 'Villa Toscana Luxury Estate',
      slug: 'villa-toscana',

      price: 18500000,
      type: 'Venta',

      location: 'La Vista Country Club',
      zone: 'Puebla',

      beds: 5,
      baths: 6,
      sqft: 850,

      description: 'Residencia de lujo con alberca y jardín amplio.',

      imageUrl: '/img/casa4.webp',

      images: ['/img/casa4.webp', '/img/casa4.webp', '/img/casa4.webp'],

      features: ['Alberca', 'Roof Garden', 'Seguridad'],

      lat: 19.041,
      lng: -98.206,
    },

    {
      id: '2',
      title: 'Penthouse Sky View',
      slug: 'penthouse-sky-view',

      price: 12000000,
      type: 'Venta',

      location: 'Distrito Sonata',
      zone: 'Puebla',

      beds: 3,
      baths: 3,
      sqft: 320,

      description: 'Penthouse moderno con vistas increíbles.',

      imageUrl: '/img/casa5.webp',

      images: ['/img/casa5.webp', '/img/casa5.webp'],

      features: ['Elevador', 'Terraza', 'Seguridad'],

      lat: 19.041,
      lng: -98.206,
    },
  ];

  getAll() {
    return this.properties;
  }

  getBySlug(slug: string) {
    return this.properties.find((p) => p.slug === slug);
  }
}
