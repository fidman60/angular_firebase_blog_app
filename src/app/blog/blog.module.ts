import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogRoutingModule} from './blog-routing/blog-routing.module';
import {PostsListComponent} from './pages/posts-list/posts-list.component';
import {SharedModule} from '../shared/shared.module';
import {AddPostComponent} from './pages/add-post/add-post.component';
import { DefaultRouteComponent } from './pages/default-route/default-route.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';

@NgModule({
    declarations: [PostsListComponent, AddPostComponent, DefaultRouteComponent, ViewPostComponent],
    imports: [
        CommonModule,
        BlogRoutingModule,
        SharedModule,
    ]
})
export class BlogModule {
}
