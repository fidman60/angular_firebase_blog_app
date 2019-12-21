import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PostsListComponent} from '../pages/posts-list/posts-list.component';
import {AddPostComponent} from '../pages/add-post/add-post.component';
import {DefaultRouteComponent} from '../pages/default-route/default-route.component';
import {ViewPostComponent} from '../pages/view-post/view-post.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultRouteComponent,
    children: [
      {path: '', component: PostsListComponent},
      {path: 'add', component: AddPostComponent},
      {path: 'view/:id', component: ViewPostComponent},
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class BlogRoutingModule {
}
