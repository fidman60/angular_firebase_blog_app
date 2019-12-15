import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PostsListComponent} from '../pages/posts-list/posts-list.component';
import {AddPostComponent} from '../pages/add-post/add-post.component';

const routes: Routes = [
    {
        path: '',
        component: PostsListComponent,
        children: [
            {path: 'add', component: AddPostComponent}
        ]
    }
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
