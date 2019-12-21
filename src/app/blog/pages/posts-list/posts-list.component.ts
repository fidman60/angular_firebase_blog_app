import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {PostsService} from '../../../core/services/posts.service';
import {Post} from '../../../core/models/Post';
import {Router} from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  message: string;
  postsSubscription: Subscription;
  posts: Post[];

  constructor(private postsService: PostsService,
              private router: Router) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postSubject.subscribe((posts: Post[]) => {
      this.posts = posts;
    });
    this.postsService.emitPosts();
  }

  onRemovePost(post: Post) {
    this.postsService.removePost(post)
      .then(() => this.message = 'Post has been removed !')
      .catch((error) => this.message = error);
  }

  onView(id: number) {
    this.router.navigate(['/posts', 'view', id]);
  }
}
