import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BlogservicesService } from '../services/blogservices.service';
import { Blog } from '../model/blog';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  blogs: Blog[] = [];
  @Input()
  title: string = "Innu's Blog";

  @Output()
  addViewSelected: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor(private blogService: BlogservicesService) {}
  goToView(view: string) {
    if (view === 'add-blog') {
      this.addViewSelected.emit(true);
    } else if (view === 'home') {
      this.addViewSelected.emit(false);
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
}
