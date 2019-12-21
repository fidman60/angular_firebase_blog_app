export class Post {
  likeIt: boolean;
  creationDate: string;

  constructor(public title: string, public content: string) {
    this.creationDate = new Date().toLocaleDateString();
  }
}
