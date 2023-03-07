import { Component, OnInit,Input } from '@angular/core';
import { Blog } from '../model/blog';
import { BlogservicesService } from '../services/blogservices.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {
  @Input() blogs: Blog[] = [];

  constructor(private blogService: BlogservicesService) { }

  ngOnInit() {
    this.blogService.showblog().subscribe(
      (data: Blog[]) => {
        this.blogs = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}