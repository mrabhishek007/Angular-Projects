import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  mainUrl = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private http: Http) {
  }

  getPosts() {
    return this.http.get(this.mainUrl);
    /*returns observable*/
  }

  postBlog(blogObj) {
    return this.http.post(this.mainUrl, JSON.stringify(blogObj));
  }

  updatePost(id) {
    return this.http.patch(this.mainUrl + '/' + id, JSON.stringify({isRead: true}));
  }


  deletePost(id) {
    return this.http.delete(this.mainUrl + '/' + id);
  }

}
