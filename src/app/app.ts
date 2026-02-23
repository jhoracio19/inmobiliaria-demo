import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Property } from './models/property';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('inmobiliaria-demo');
  searchTerm: string = '';
  selectedType: string = 'Todos';

  allProperties: Property[] = [
    {
      id: 1,
      title: 'Villa Toscana Luxury Estate',
      price: 18500000,
      location: 'La Vista Country Club',
      beds: 5,
      baths: 6,
      sqft: 850,
      imageUrl: 'img/casa1.webp',
      type: 'Venta',
    },
    {
      id: 2,
      title: 'Penthouse Sky View',
      price: 12000000,
      location: 'Distrito Sonata',
      beds: 3,
      baths: 3,
      sqft: 320,
      imageUrl: 'img/casa2.webp',
      type: 'Venta',
    },
    {
      id: 3,
      title: 'Residencia Minimalista',
      price: 9800000,
      location: 'Lomas de Angelópolis III',
      beds: 4,
      baths: 4,
      sqft: 450,
      imageUrl: 'img/casa3.webp',
      type: 'Venta',
    },
    {
      id: 4,
      title: 'Casa Club de Golf',
      price: 22000000,
      location: 'El Encinar',
      beds: 6,
      baths: 7,
      sqft: 1200,
      imageUrl: 'img/casa4.webp',
      type: 'Venta',
    },
    {
      id: 5,
      title: 'Loft Industrial Ejecutivo',
      price: 25000,
      location: 'Zona Ánimas',
      beds: 1,
      baths: 1,
      sqft: 110,
      imageUrl: 'img/casa5.webp',
      type: 'Renta',
    },
    {
      id: 6,
      title: 'Mansión Contemporánea',
      price: 15500000,
      location: 'Haras del Bosque',
      beds: 5,
      baths: 5,
      sqft: 700,
      imageUrl: 'img/casa6.webp',
      type: 'Venta',
    },
  ];

  // Arreglo para el HTML
  filteredProperties: Property[] = [];

  ngOnInit() {
    this.filteredProperties = [...this.allProperties];
  }

  filter() {
    this.filteredProperties = this.allProperties.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        p.location.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesType = this.selectedType === 'Todos' || p.type === this.selectedType;
      return matchesSearch && matchesType;
    });
  }
}
