import { Component ,OnInit} from '@angular/core';
import { Router} from '@angular/router';

import {NewsInfoService} from './share/news_info.service'


@Component({
  selector: 'manage-news',
  templateUrl: './manage-news.component.html',
  styleUrls: ['./manage-news.component.css']
})
export class ManageNewsComponent implements OnInit{
   header;
   newsList;

  constructor(private newsService:NewsInfoService,private router:Router){
  }

  ngOnInit(){
    this.header=this.newsService.getNewsHeader();
    this.newsList=this.newsService.getNewsList()

  }

  handleClick(ev){

    if(ev.target.innerHTML=='修改'){
      console.log('修改新闻');
      let newsId=ev.target.parentNode.id;
      console.log(newsId)
      this.router.navigate(['/revise-news',newsId ]);

      //为什么通过对象传递不能成功？？
    }

    if(ev.target.innerHTML=='删除'){
      console.log('删除新闻')

      let newsId=ev.target.parentNode.id;
      console.log(newsId)

      this.newsService.deleteNewsItem(this.newsService)
      /**
       * 可以通过传入每个项所在的数组的索引，更快的进行更新
       */

    }



  }


}
