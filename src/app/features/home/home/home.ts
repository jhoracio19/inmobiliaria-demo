import { Component } from '@angular/core';
import { Hero } from '../sections/hero/hero';
import { SearchBar } from '../../../shared/components/search-bar/search-bar';
import { FeaturedProperties } from '../sections/featured-properties/featured-properties';
import { Zones } from '../sections/zones/zones';
import { Testimonials } from '../sections/testimonials/testimonials';
import { Cta } from '../sections/cta/cta';

@Component({
  selector: 'app-home',
  imports: [Hero, SearchBar, FeaturedProperties, Zones, Testimonials, Cta],
  templateUrl: './home.html',
})
export class Home {}
