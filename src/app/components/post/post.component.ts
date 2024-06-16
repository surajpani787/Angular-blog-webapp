import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  @Input() post1: any;
  @Output() ondeletePost: EventEmitter<any> = new EventEmitter;

  constructor(private postService: PostService) { }

  ngOnInit(): void {

  }

  onDelete(post: any) {
    this.ondeletePost.emit();
  }



}
