import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Blog } from '../model/blog';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  @Output() blogAdded = new EventEmitter<Blog>();
  @Output() cancelAdd = new EventEmitter<boolean>();
  blog: Blog = {
    title: '',
    author: '',
    content: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.blogAdded.emit(this.blog);
    this.blog = {
      title: '',
      author: '',
      content: ''
    };
  }

  onCancel() {
    this.cancelAdd.emit(true);
  }
}
