import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../model/blog';
@Injectable({
  providedIn: 'root'
})
export class BlogservicesService {

  constructor(private http:HttpClient){}
  url='http://localhost:3000/blogs'
  showblog():Observable<Blog[]>{
    return this.http.get<Blog[]>(this.url);
  }
  createBlog(blog: Blog){
    return this.http.post<Blog[]>(this.url,blog);
  }

}
