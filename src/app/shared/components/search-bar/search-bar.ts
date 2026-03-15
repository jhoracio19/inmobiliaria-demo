import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './search-bar.html',
})
export class SearchBar {
  router = inject(Router);

  location = '';
  type = 'Venta';
  beds = 2;

  search() {
    this.router.navigate(['/propiedades'], {
      queryParams: {
        location: this.location,
        type: this.type,
        beds: this.beds,
      },
    });
  }
}
