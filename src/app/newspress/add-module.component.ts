import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Module_infoService} from './share/module_info.service'

@Component({
  selector: 'add-news',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css']
})
export class AddModuleComponent implements OnInit{
  constructor(private moduleService:Module_infoService){}

  moduleName;
  moduleIndex;

  hasSubmit=false;
  hasRepeatModuleName=false;
  hasRepeatModuleIndex=false;
  hasDummyModuleName=false;
  hasDummyModuleIndex=false;

  moduleList;

  addMore(){
    this.hasSubmit=false;

    this.moduleIndex='';
    this.moduleName='';

  }

  onSubmit(ev){
    ev.preventDefault();

    if(this.moduleName){
      this.hasDummyModuleName=false
      let repeatModuleName=this.moduleList.find((item,index,arr)=>{
        return item.moduleName==this.moduleName
      });

      if(repeatModuleName){
        this.hasRepeatModuleName=true

      }else{
        this.hasRepeatModuleName=false
      }
    }else{
      this.hasDummyModuleName=true

    }

    if(this.moduleIndex){
      this.hasDummyModuleIndex=false;
      let repeatModuleIndex=this.moduleList.find((item,index,arr)=>{
        return item.moduleIndex==this.moduleIndex
      });
      if(repeatModuleIndex){
        this.hasRepeatModuleIndex=true
      }else{
        this.hasRepeatModuleIndex=false
      }
    }else{
      this.hasDummyModuleIndex=true
    }

    if(!(this.hasDummyModuleName||this.hasDummyModuleIndex||this.hasRepeatModuleIndex||this.hasRepeatModuleName)){
      let newModuleItem={
        moduleId:Date.now(),
        moduleIndex:this.moduleIndex,
        moduleName:this.moduleName
      };
      this.moduleService.addModule(newModuleItem);
      this.hasRepeatModuleName=false;
      this.hasRepeatModuleIndex=false;
      this.hasSubmit=true;
    }
  }

  ngOnInit(){
    this.moduleList=this.moduleService.getModuleList();
    console.log(this.moduleList)

  }

  getModuleList(){


  }

}
