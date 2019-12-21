import {Component, OnInit} from '@angular/core';
import {Post} from '../../../core/models/Post';
import {PostsService} from '../../../core/services/posts.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  message: string;
  form: FormGroup;

  constructor(private postsService: PostsService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  onAddPost() {
    const title = this.form.get('title').value;
    const content = this.form.get('content').value;
    const post = new Post(title, content);

    this.postsService.addPost(post)
      .then(() => {
        this.form.reset();
        this.message = 'Post has been created'
      })
      .catch((error) => this.message = error);
  }

}
