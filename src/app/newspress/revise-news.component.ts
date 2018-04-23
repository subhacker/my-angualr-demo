import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {NewsInfoService} from './share/news_info.service'
import {Module_infoService} from './share/module_info.service'
@Component({
  selector: 'revise-news',
  templateUrl: './revise-news.component.html',
  styleUrls: ['./revise-news.component.css']
})
export class ReviseNewsComponent implements OnInit{
  newsItem;
  moduleList;

  dummyNewsTitle=false;
  dummyNewsOption=false;
  dummyNewsContent=false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService:NewsInfoService,
    private moduleService:Module_infoService
  ) {}

  ngOnInit() {
    let newsId= this.route.snapshot.params.newsId;
    this.newsItem=this.newsService.getNewsItem(newsId)
    this.moduleList=this.moduleService.getModuleList();
  }

  submit(){
    if(this.newsItem.title){
      this.dummyNewsTitle=false
    }else{
      this.dummyNewsTitle=true
    }

    if(this.newsItem.module=='none'){
      this.dummyNewsOption=true
    }else{
      this.dummyNewsOption=false
    }

    if(this.newsItem.newsContent){
      this.dummyNewsContent=false;
    }else{
      this.dummyNewsContent=true
    }

    if(!(this.dummyNewsTitle||this.dummyNewsOption||this.dummyNewsContent)){
      this.newsService.updateNewsItem(this.newsItem)
      this.router.navigate(['/manage-news', ]);
    }
  }
}
