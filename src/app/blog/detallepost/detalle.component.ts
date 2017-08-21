import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, ActivatedRoute, Params } from '@angular/router';


import { HighlightJsService } from 'angular2-highlight-js';

// import {dateFormatPipe} from '../pipes/fechas'

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Post} from '../indexpost/post';

import { PostService } from './service';

@Component({
    selector: 'detalle',
    templateUrl: 'template/detalle.component.html'
})

export class DetalleComponent implements OnInit{
    sampleContent = '';
    errorMessage: String;

    objectGetModel : Post[] = [];

    constructor(
        private route: Router,
        private activatedRoute: ActivatedRoute,
        private highlightJsService: HighlightJsService,
        private postService : PostService
    ) {
        
    }

    

    ngOnInit(): void {

        this.activatedRoute.params.subscribe((params: Params) => {
            let slug = params['slug'];
            console.log(slug);
            this.getObjectModel(slug);
          });

        this.exmaple();
    }

    private getObjectModel(slug): void {
        this.postService.get(slug).subscribe(
            objGetAll => this.objectGetModel = objGetAll,
            error =>  this.errorMessage = <any>error
          );
    }

    exmaple(): void{
        this.sampleContent = `

        
        <p>A veces tenemos la necesidad de querer hacer peticiones a el servidor de manera secuencial(<span style="color: rgb(84, 84, 84); font-family: arial, sans-serif; font-size: small;">conjunto de elementos que se ordenan en una determinada sucesi&oacute;n,</span>esto es, uno detr&aacute;s de otros o unos delante de otros, guardando una relaci&oacute;n entre s&iacute;.).<br />
        Esto lo podr&iacute;amos hacer usando funciones de callback en JavaScript, pero &iquest;que pasar&iacute;a si quisi&eacute;ramos ejecutar una petici&oacute;n a el servidor hasta cuando se terminen las dem&aacute;s de ejecutarse?, para esto tenemos la siguiente funci&oacute;n en JavaScript.</p>
        
        <p>Lo primero que tenemos que hacer es copiar el siguiente c&oacute;digo&nbsp;<span style="white-space: pre-wrap;"> </span></p>

        <pre>
            <code class="javascript highlight" >
            Sequence = function () {
                this.func = null;
                this.ss = [];
                var me = this;
                this.reset = function () {
                    me.ss = [];
                    me.func &amp;&amp; (
                            delete me.func
                            );
                };
                this.set = function (func, arg) {
                    me.ss.push({
                        &#39;func&#39;: func,
                        &#39;arg&#39;: arg
                    });
                };
                this.next = function () {
                    return me.commit();
                };
                this.finish = function () {
                    me.ss = [];
                    return me.commit();
                };
                this.commit = function (func, rev_) {
                    func &amp;&amp; (me.func = func);
                    rev_ &amp;&amp; me.ss.reverse();
                    var sq = null;
                    if (me.ss.length) {
                        sq = me.ss.shift();
                        sq.func(sq.arg);
                    } else {
                        me.func &amp;&amp; me.func();
                    }
                    return sq ? true : false;
                };
            };
             </code>
        </pre>
        

        <p>y pegarlo en un nuevo archivo con el nombre que mas nos acomode, en este ejemplo le pondr&eacute; secuencia.js. Despu&eacute;s mandarlo a llamar en el head del html.</p>
        <pre>
            <code class="javascript highlight" >
&lt;script type=&#39;text/javascript&#39; src=&#39;secuencia.js&#39;&gt;&lt;/script&gt;
            </code>
        </pre>

        <p>Para instanciar nuestra funci&oacute;n utilizaremos:</p>

        <pre>
        <code class="javascript highlight" >
        var seq = new Sequence();
        </code>
    </pre>
        
        <p>Ahora nos crearemos unas funciones con callback para nuestro ejemplo.</p>

        <pre>
            <code class="javascript highlight" >
            function funcion1(parameter, callBack) {
                $.ajax({
                   url : &#39;/ruta-service1/&#39;,
                   type : &quot;post&quot;,
                   data : {
                    message : &quot;Mensaje&quot;
                   },
                    success : function(json) {
                        callBack(0);
                    },
                     error : function(xhr,errmsg,err) {
                        callBack(1);
                     }
                });
            }
            
            function funcion2(parameter, callBack) {
                $.ajax({
                   url : &#39;/ruta-service2/&#39;,
                   type : &quot;post&quot;,
                   data : {
                    message : &quot;Mensaje&quot;
                   },
                    success : function(json) {
                        callBack(0);
                    },
                     error : function(xhr,errmsg,err) {
                        callBack(1);
                     }
                });
            }
            
            function funcion3(parameter, callBack) {
                $.ajax({
                   url : &#39;/ruta-service3/&#39;,
                   type : &quot;post&quot;,
                   data : {
                    message : &quot;Mensaje&quot;
                   },
                    success : function(json) {
                        callBack(0);
                    },
                     error : function(xhr,errmsg,err) {
                        callBack(1);
                     }
                });
            }
             </code>
        </pre>
                
        <p>Una vez creadas nuestras funciones como pruebas, iniciamos con el proceso de implementaci&oacute;n.</p>
        
        <p>En donde crearemos nuestras funciones que tendr&aacute;n un identificador para poder llevar la secuencia de las peticiones,&nbsp; estas pueden ir de el numero &ldquo;0&rdquo; hasta donde se requiera. Para este ejemplo usaremos solo tres, ya que se crearon 3 funciones como pruebas&nbsp;e iniciando desde el 0.</p>
        
        <pre>
        <code class="javascript highlight" >
            seq.set(function () {
                funcion1(parameter,function (e) {
                    if (e == 0) {
                        seq.next();
                    } else {
                        seq.finish();
                    }
                });
            }, 0);
            
            seq.set(function () {
                funcion2(parameter,function (e) {
                    if (e == 0) {
                        seq.next();
                    } else {
                        seq.finish();
                    }
                });
            }, 1);
            
            seq.set(function () {
                funcion3(parameter,function (e) {
                    if (e == 0) {
                        seq.next();
                    } else {
                        seq.finish();
                    }
                });
            }, 2);  
        </code>
    </pre>
        
        <p>Cada instancia de la funci&oacute;n &quot;set&quot;, tiene dos instancias m&aacute;s:</p>
        
        <p>La primera es:</p>

        <pre>
            <code class="javascript highlight" >
            seq.next();
            </code>
        </pre>
        

        
        <p>Que lo que hace es ir a la siguiente secuencia cuando ya concluyo la primera, es decir cuando el callback respondi&oacute; con c&oacute;digo 0. Esto se repite por cada funci&oacute;n que se cree.</p>
        
        <p>La segunda es:</p>

        <pre>
            <code class="javascript highlight" >
            seq.finish();
            </code>
        </pre>
        
        <p>Que lo que hace es finalizar el proceso de secuencia si algo sale mal, cuando el servicio responde con c&oacute;digo 1.<br />
        Y por &uacute;ltimo se usa la funci&oacute;n commit, para enviar todo las peticiones ya con la secuencia cargada.</p>

        <pre>
            <code class="javascript highlight" >
            seq.commit(function () {
            });
            </code>
        </pre>
        

       `;
    }
}


