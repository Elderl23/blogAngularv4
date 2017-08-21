import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subscription } from "rxjs/Subscription";

import { FooterModule } from '../footer/footer.module';

import { PostService } from './service';

import { Post } from './post';

@Component({
    selector: 'index',
    templateUrl: 'template/index.component.html',

})

export class IndexComponent implements OnInit, OnDestroy {
    errorMessage: String;

    objAllModel : Post[] = [];

    sampleContent = '';
    content = '';

    private countdownEndRef: Subscription = null;

    constructor(
        private postService: PostService
    ) {
        this.content = '<p>Hello <strong>World !</strong></p>';
    }


    ngOnInit(): void {
        this.fetchBooks();
    }

    fetchBooks(): void {
        this.countdownEndRef = this.postService.getFunctionAll().subscribe(
            data => this.objAllModel = data,
            error =>  this.errorMessage = <any>error
          );
    }

    ngOnDestroy(){
        this.countdownEndRef.unsubscribe();
      }


}
