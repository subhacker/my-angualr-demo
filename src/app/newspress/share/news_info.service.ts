import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class NewsInfoService {

   newsData=[
    {
      newsId:123,
      title:'react入门',
      module:'react',
      author:'hans',
      time:'2018-2-23 12:43:45',
      visitTime:43,
      newsContent:'React Redux Router'
    }
  ];

   header=[
    {
      name:'序号',
      classPros:'index'
    },
    {
      name:'标题',
      classPros:'title'
    },
    {
      name:'模块',
      classPros:'module'
    },
    {
      name:'作者',
      classPros:'author'

    },
    {
      name:'创建时间',
      classPros:'time'
    },
    {
      name:'浏览次数',
      classPros:'times'
    },
    {
      name:'操作',
      classPros:'operate'
    }
  ];


  constructor(private http:HttpClient){}

  getNewsHeader(){
    return this.header
  }

  getNewsList(){
    return this.newsData;
  }

  getNewsItem(newsId){
    return this.newsData.find((item,index,arr)=>{
      return item.newsId==newsId;
    })
  }

  updateNewsItem(newsItem){
    let newsId=newsItem.newsId;
    let index=this.newsData.findIndex((item,index,arr)=>{
      return item.newsId==newsId
    })

    this.newsData.splice(index,1,newsItem)
  }

  deleteNewsItem(newsId){
    let index=this.newsData.findIndex((item,index,arr)=>{
      return item.newsId==newsId
    })
    this.newsData.splice(index,1);
  }

  addNewsItem(newsItem){
    this.newsData.push(newsItem)
  }



}
