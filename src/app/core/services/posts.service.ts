import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {Post} from '../models/Post';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postSubject: Subject<Post[]>;
  private posts: Post[];

  constructor() {
    this.posts = [];
    this.postSubject = new Subject<Post[]>();
    this.onChangePostsEvent();
  }

  emitPosts() {
    this.postSubject.next(this.posts);
  }

  addPost(post: Post) {
    return new Promise(((resolve, reject) => {
      firebase.database().ref('/posts').set([...this.posts, post])
        .then(() => resolve())
        .catch((error) => reject(error));
    }));
  }

  removePost(postToRemove: Post) {
    return new Promise((resolve, reject) => {
      firebase.database().ref('/posts/')
        .set(this.posts.filter((post) => post.title !== postToRemove.title))
        .then(() => resolve())
        .catch((error) => reject(error));
    });
  }

  getPost(id: number) {
    return new Promise((resolve, reject) => {
      firebase.database().ref('/posts/' + id).once('value')
        .then((data: DataSnapshot) => {
          resolve(data.val());
        })
        .catch(error => {
          reject(error);
        })
    });
  }

  onChangePostsEvent() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
        this.posts = data.val() || [];
        this.emitPosts();
      });
  }

}
