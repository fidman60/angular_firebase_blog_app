import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsService} from '../../../core/services/posts.service';
import {Post} from '../../../core/models/Post';
import {error} from 'util';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  private post: any;

  constructor(private router: Router,
              private postsService: PostsService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.postsService.getPost(this.activeRoute.snapshot.params.id)
      .then(post => {
        this.post = post;
      })
      .catch(error => console.log(error));
  }

  goBack() {
    this.router.navigate(['/posts']);
  }
}
