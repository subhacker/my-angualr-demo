import { Component,OnInit } from '@angular/core';

import {Module_infoService} from './share/module_info.service'

import {NewsInfoService} from './share/news_info.service'
@Component({
  selector: 'add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit{

  dummyNewsTitle=false;
  dummyNewsModule=false;
  dummyNewsContent=false;

  newsTitle='';
  newsOption='none';
  newsContent='';
  moduleList;

  hasSubmit=false;

  constructor(private moduleService:Module_infoService,private newsInfoService:NewsInfoService){}

  ngOnInit(){
    this.moduleList=this.moduleService.getModuleList();
  }

  submit(){

    if(this.newsTitle){
      this.dummyNewsTitle=false
    }else{
      this.dummyNewsTitle=true
    }

    if(this.newsContent){
      this.dummyNewsContent=false
    }else {
      this.dummyNewsContent=true
    }

    if(this.newsOption=='none'){
      this.dummyNewsModule=true;
    }else{
      this.dummyNewsModule=false
    }

    if(!(this.dummyNewsModule||this.dummyNewsTitle||this.dummyNewsContent)){
      let newsObj={
        newsId:Date.now(),
        title:this.newsTitle,
        module:this.newsOption,
        author:'hans',
        time:'2018-2-23 12:43:45',
        visitTime:43,
        newsContent:this.newsContent
      };

      this.newsInfoService.addNewsItem(newsObj)
      this.hasSubmit=true
    }

  }
  addMore(){
    this.dummyNewsContent=false;
    this.dummyNewsModule=false;
    this.dummyNewsTitle=false;
    this.hasSubmit=false
    this.newsTitle='';
    this.newsOption='none';
    this.newsContent=''
  }



}
