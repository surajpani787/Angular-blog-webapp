import { Component, Input, OnInit } from '@angular/core';
// import { Posts } from '../../mock-posts';
import { CommonModule } from '@angular/common';
import { PostComponent } from '../post/post.component';
import { PostService } from '../../services/post.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {

  posts: any;
  @Input() colClass: any;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    // console.log(this.posts);
    this.postService.getPosts().subscribe((retrievedData) => this.posts = retrievedData);
  }

  deletePost(post: any) {
    this.postService.deletePost(post.id).subscribe(() => this.posts = this.posts.filter(
      (p: any) => p.id != post.id
    ));
  }

}
