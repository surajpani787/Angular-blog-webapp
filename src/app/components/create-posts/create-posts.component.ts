import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-posts',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-posts.component.html',
  styleUrl: './create-posts.component.css'
})
export class CreatePostsComponent implements OnInit {

  title: any;
  content: any;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {


  }
  onsubmit() {
    const new_post = {
      title: this.title,
      content: this.content
    }
    this.postService.createPost(new_post).subscribe(()=> this.router.navigate(['/blog']));
  }

}
