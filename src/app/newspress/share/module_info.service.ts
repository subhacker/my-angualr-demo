import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class Module_infoService {
  moduleList=[
    {
      moduleIndex:1,
      moduleName:'react',
      moduleId:'15000001'

    },
    {
      moduleIndex:6,
      moduleName:'vue',
      moduleId:'15000344001'

    },
    {
      moduleIndex:5,
      moduleName:'angular',
      moduleId:'159993'

    },
    {
      moduleIndex:2,
      moduleName:'bootstrap',
      moduleId:'1500dsd0001'

    }
  ];

  constructor(private http:HttpClient){}


 getModuleList(){
   return this.moduleList
 }

 addModule(moduleItem){
    this.moduleList.push(moduleItem)
   console.log('更新后的moduleList')
    console.log(this.moduleList)
 }

 deleteModuleItem(moduleIndex){
    this.moduleList.splice(moduleIndex,1)

 }
 updateModule(reviseItemObj,index){
    this.moduleList.splice(index,1,reviseItemObj)
 }



 checkModuleNameExist(){
   return true
 }
}
