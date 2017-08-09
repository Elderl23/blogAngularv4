import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { Http} from '@angular/http';

import { Categorias} from './categorias.model';
import { Etiquetas} from './etiquetas.model';

// Statics
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriasService{
    constructor(private http: Http) {}

    getAll (): Observable<Categorias[]> {
        return this.http.get('http://127.0.0.1:8000/categorias/')
        .map(response => response.json() as Categorias[])
        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
      }
}

@Injectable()
export class EtiquetasService{
    constructor(private http: Http) {}

    getAll (): Observable<Etiquetas[]> {
        return this.http.get('http://127.0.0.1:8000/etiquetas/')
        .map(response => response.json() as Etiquetas[])
        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
      }
}