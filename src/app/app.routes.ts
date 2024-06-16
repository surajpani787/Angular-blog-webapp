import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreatePostsComponent } from './components/create-posts/create-posts.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'blog/createpost', component: CreatePostsComponent },
    { path: 'blog/editpost/:id', component: EditPostComponent }
];