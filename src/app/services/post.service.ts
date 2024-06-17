import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = "https://deploy-json-server-main.onrender.com/posts"


  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl)
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Post>(url)
  }

  deletePost(id: number): Observable<Post> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Post>(url)
  }

  createPost(post: any): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post)
  }

  updatePost(post: any): Observable<Post> {
    const url = `${this.apiUrl}/${post.id}`;
    return this.http.put<Post>(url, post)
  }
}
