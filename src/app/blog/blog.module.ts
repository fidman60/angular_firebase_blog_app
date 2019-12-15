import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogRoutingModule} from './blog-routing/blog-routing.module';
import {PostsListComponent} from './pages/posts-list/posts-list.component';
import {SharedModule} from '../shared/shared.module';
import {AddPostComponent} from './pages/add-post/add-post.component';

@NgModule({
    declarations: [PostsListComponent, AddPostComponent],
    imports: [
        CommonModule,
        BlogRoutingModule,
        SharedModule,
    ]
})
export class BlogModule {
}
