import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FooterModule } from '../footer/footer.module';

import { PostService } from './service';

import { Post } from './post';

@Component({
    selector: 'index',
    templateUrl: 'template/index.component.html',

})

export class IndexComponent implements OnInit {
    errorMessage: String;

    objAllModel : Post[] = [];

    sampleContent = '';
    content = '';

    constructor(
        private postService: PostService
    ) {
        this.content = '<p>Hello <strong>World !</strong></p>';
    }


    ngOnInit(): void {
        this.fetchBooks();
    }

    fetchBooks(): void {
        this.postService.getFunctionAll().subscribe(
            data => this.objAllModel = data,
            error =>  this.errorMessage = <any>error
          );
    }


}
