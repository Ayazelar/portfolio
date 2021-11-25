import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as DataService from '../services/bucket'

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.page.html',
  styleUrls: ['./blog-content.page.scss'],
})
export class BlogContentPage implements OnInit {

  blog: DataService.Blog;
  id: any;
  constructor(private route: ActivatedRoute) {
    DataService.initialize({ apikey: "1lgsn519kvkmsk51" })
   }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getBlog()
    
  }

  async getBlog(){
    this.blog = await DataService.blog.get(this.id)
  }
}
