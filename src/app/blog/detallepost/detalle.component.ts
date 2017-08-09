import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HighlightJsService } from 'angular2-highlight-js';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'detalle',
    templateUrl: 'template/detalle.component.html'
})

export class DetalleComponent implements OnInit{
    sampleContent = '';

    constructor(
        private highlightJsService: HighlightJsService
    ) {}

    ngOnInit(): void {
        this.exmaple();
    }

    exmaple(): void{
        this.sampleContent = `
        <p>Bienvenidos a el curso de anguar v4, donde aprenderemos a desarrollar aplicaciones de alto nivel en el mundo de la programcion .</p>
        
        <p>el sigueinte codigo mustra la estructura semantica de angular v4.</p>
        
        <pre>
        <code class="typescript highlight" >
            class Greeter {
                constructor(public greeting: string) { }
                greet() {
                    return "hello world";
                }
            };
        </code>
        </pre>
        <pre>
            <code class="javascript highlight" >
                alert('Hello, World!');
            </code>
        </pre>
        
       `;
    }
}


