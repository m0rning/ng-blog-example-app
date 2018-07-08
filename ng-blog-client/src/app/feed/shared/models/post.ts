export class Post {
  id: number;
  title: string;
  author: string;
  content: string;
  image: string;
  description: string;

  constructor(post: Post) {
    this.id = post.id;
    this.title = post.title;
    this.author = post.author;
    this.content = post.content;
    this.image = post.image;
    this.description = post.description;
  }
}
