import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent implements OnInit {
  id?: number;
  title?: string;
  content?: string;

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((parameters) => this.postService.getPost(parameters['id']).subscribe((retrievedPost) => {
      this.id = retrievedPost.id,
        this.title = retrievedPost.title,
        this.content = retrievedPost.content
    }));
  }

  onsubmit() {
    const updatedPost = {
      id: this.id,
      title: this.title,
      content: this.content
    }

    this.postService.updatePost(updatedPost).subscribe(() => this.router.navigate(['/blog']));

  }

}