import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

// Component
import { IndexComponent} from './index.component';

const loginRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes),
  ],
  exports: [
    RouterModule,
  ]
})



export class IndexRoutingModule { }