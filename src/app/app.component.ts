import { Component } from '@angular/core';
import { Blog } from './model/blog';
import { BlogservicesService } from './services/blogservices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog Hub';
  blogs: Blog[] = [];
  addBlog = false;

  constructor(private blogService: BlogservicesService) { }

  ngOnInit() {
    this.viewBlogs();
  }

  onAddViewSelected(addView: boolean) {
    this.addBlog = addView;
  }

  viewBlogs() {
    this.blogService.showblog().subscribe(
      (data: Blog[]) => {
        this.blogs = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  createBlog(blog: Blog) {
    this.blogService.createBlog(blog).subscribe(
      (data: any) => {
        this.blogs.push(data);
        this.addBlog = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
