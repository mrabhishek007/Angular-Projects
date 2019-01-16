import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: PostModel[] = [];
  isPostProgressInvisible = true;

  // getting the instance of angular http class
  constructor(private postService: PostService) {
  }

  // initialize heavy initial  works on ngOnInit() instead of constructor
  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts()
      .subscribe(
        response => {
          console.log(response);
          this.post = response.json();
        },
        error => {
          console.log('Error while retrieving content', error);
        });
  }

  postBlog(input: HTMLInputElement) {
    console.log('main');
    this.isPostProgressInvisible = false; // showing progressbar while posting

    const blogObj: PostModel = {
      id: this.post.length + 1,
      userId: 100,
      title: input.value
    };

    this.postService.postBlog(blogObj) //separating http call to do unit testing
      .subscribe(
        response => {
          console.log(response, response.json());
          this.post.unshift(blogObj);
          input.value = '';
          this.isPostProgressInvisible = true;
        },
        (error: Response) => {
          if (error.status === 400) {
            console.log('bad input provided by user', error.json());
          } else {
            console.log('Error while posting content', error);
          }
          this.isPostProgressInvisible = true;
        });

  }

  updatePost(post: PostModel, postBtn: HTMLInputElement) {
    postBtn.classList.add('running'); // adding class to show loader on button
    console.log(postBtn.className);

    // patch is used when we want to update only a part of an object
    this.postService.updatePost(post.id)
      .subscribe(
        response => {
          console.log(response);
          postBtn.classList.remove('running');
        },
        error => {
          console.log('Error while updating the post', error);
          postBtn.classList.remove('running');
        });


    /*put is similar but unlike path we have to send the whole object to api to get successful response*/
    /*  post.isRead = true;
      this.http.put(this.mainUrl + '/' + post.id, JSON.stringify(post) )
        .subscribe(response => {
          console.log(response);
        }, error => {
          console.log('Error while updating the post')
        });*/
  }

  deletePost(post: PostModel, input: HTMLInputElement) {

    input.classList.add('running'); // adding class to show loader on button

    this.postService.deletePost(post.id)
      .subscribe(
        response => {
          console.log(response);
          const postIndex = this.post.indexOf(post);
          this.post.splice(postIndex, 1);
          input.classList.remove('running');
        },
        (error: Response) => {
          if (error.status === 404) {
            alert('This post has already deleted');
          } else {
            console.log('Error while deleting the post...', error);
          }
          input.classList.remove('running');

        });

  }
}

interface PostModel {
  userId: number,
  id: number,
  title: string,
  isRead?: boolean
}
