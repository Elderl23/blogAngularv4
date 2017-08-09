import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'detalle',
    templateUrl: 'template/categorias.html'
})

export class CategoriasComponent {
    pager: any = {};
    pagedItems: Array<Object>;
}
