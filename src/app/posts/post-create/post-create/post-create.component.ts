import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent implements OnInit {
  enterTitle = '';
  enterContent = '';
  @Output() postCreated = new EventEmitter<Post>();

  constructor() {}

  onCreatePost(form: NgForm) {
    if (form.invalid) {
      return;
    } else {
      const post: Post = {
        title: form.value.title,
        content: form.value.content,
      };
      this.postCreated.emit(post);
    }
  }

  ngOnInit(): void {}
}
