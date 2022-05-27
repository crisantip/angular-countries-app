import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];
  constructor(private paisService: PaisService) { }

  buscarPorRegion(region: string) {
    if(this.regionActiva === region) { return; }

    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarPorRegion(region)
      .subscribe(paises => this.paises = paises);
  }

  getClaseCSS(region: string) {
    return (this.regionActiva === region) 
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
