import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'etiquetas',
    templateUrl: 'template/etiquetas.html'
})

export class EtiquetasComponent {
    pager: any = {};
    pagedItems: Array<Object>;
}
