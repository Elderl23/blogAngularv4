import { Component, OnInit } from '@angular/core';
import { RouterLink, } from '@angular/router';

import { Categorias} from './categorias.model';
import { Etiquetas} from './etiquetas.model';

import { CategoriasService, EtiquetasService } from './service';

@Component({
    selector: 'aside-app',
    templateUrl: 'template/aside.component.html',
})

export class AsideComponent implements OnInit  {
    errorMessage: String;
    categoriasObj : Categorias[] = [];
    etiquetasObj : Etiquetas[] = [];

    constructor(
        private categoriasService: CategoriasService,
        private etiquetasService: EtiquetasService
    ){}

    ngOnInit(): void {
        this.catecoriasFuntion();
        this.etiquetasFuntion();
    }

    catecoriasFuntion(): void {
        this.categoriasService.getAll().subscribe(
            objGetAll => this.categoriasObj = objGetAll,
            error =>  this.errorMessage = <any>error
          );
    }
    etiquetasFuntion(): void {
        this.etiquetasService.getAll().subscribe(
            objGetAll => this.etiquetasObj = objGetAll,
            error =>  this.errorMessage = <any>error
          );
    }
}
