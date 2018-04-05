import { Component,OnInit } from '@angular/core';
import {Module_infoService} from './share/module_info.service'

@Component({
  selector: 'revise-module',
  templateUrl: './revise-module.component.html',
  styleUrls: ['./revise-module.component.css']
})
export class ReviseModuleComponent implements OnInit{

  reviseIndex;

  moduleList;
  reviseItemId='';
  moduleName='';
  moduleIndex;

  constructor(private moduleService:Module_infoService){}

  ngOnInit(){
    this.moduleList=this.moduleService.getModuleList()
  }

  handleClick(ev){
    console.log(ev);
    if(ev.target.innerHTML=='修改'){
      let reviseItemId=ev.target.parentNode.id;
      this.reviseIndex=this.moduleService.getModuleList().findIndex((item,index,arr)=>{
        return item.moduleId==reviseItemId
      });
      this.reviseItemId=reviseItemId;
      ev.target.innerHTML='保存';
      let reviseModuleItem=this.moduleService.getModuleList()[this.reviseIndex];
      this.moduleName=reviseModuleItem['moduleName'];
      this.moduleIndex=reviseModuleItem['moduleIndex']
      return
    }

    if(ev.target.innerHTML=='保存'){
      let saveItemId=ev.target.parentNode.id;
      let reviseItemObj={
        moduleName:this.moduleName,
        moduleIndex:this.moduleIndex,
        moduleId:saveItemId
      };
      this.moduleService.updateModule(reviseItemObj,this.reviseIndex);
      this.moduleList=this.moduleService.getModuleList();
      this.reviseItemId='';
      ev.target.innerHTML='修改';
      return
    }



    if(ev.target.innerHTML=='冻结'){
      console.log('冻结')
      return
    }

    if(ev.target.innerHTML=='删除'){
      let deleteItemId=ev.target.parentNode.id;
      this.reviseIndex=this.moduleService.getModuleList().findIndex((item,index,arr)=>{
        return item.moduleId==deleteItemId
      });
      this.moduleService.deleteModuleItem(this.reviseIndex);
      this.moduleList=this.moduleService.getModuleList()
      return
    }
  }

}

