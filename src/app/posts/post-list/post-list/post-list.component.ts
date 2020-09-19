import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  /* posts = [
    { title: 'Greetings!!', content: 'Good Morning Everyone!!!' },
    { title: 'New Arrival!!!', content: 'New books are arrived!!!' },
    { title: 'Birthday Wish', content: 'Happy Birthday Muflah' },
  ]; */
  @Input() posts: Post[] = [];
  constructor() {}

  ngOnInit(): void {}
}
