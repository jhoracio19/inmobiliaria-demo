export interface Property {
  id: string;

  title: string;
  slug: string;

  price: number;
  type: 'Venta' | 'Renta';

  location: string;
  zone?: string;

  beds: number;
  baths: number;
  sqft: number;

  description?: string;

  imageUrl: string;
  images?: string[];

  features?: string[];

  lat?: number;
  lng?: number;
}
