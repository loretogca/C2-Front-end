/*import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {



  myProjects:Project[]=[
    {
      id:"asdf",
    name:"Sitio producto",
    stars:2,
    description:"Sitio de Productos deportivos",
    liked:false,
    tag:["HTML","CSS"]
  },
  {
    id:"sssss",
    name:"Sitio deporte",
    stars:1,
    description:"Sitio de Productos deportivos",
    liked:false,
    tag:["HTML","IMG"]
  },
  {
    id:"eeeeee",
    name:"Sitio producto",
    stars:4,
    description:"Sitio de Telefonos",
    liked:false,
    tag:["HTML"]
  },
  ];
  constructor() { }
  public getProjects():Project[]{
    return this.myProjects;
  }
  public getOnlyFav():Project[]{
    return this.myProjects.filter(item =>item.liked)
  }

  like(id: string) {
   this.myProjects.forEach(item=>{
    if (item.id===id){
      item.liked = !item.liked;
      
    }
   })
  }

  getProjectById(projectId: string):Project {
    return this.myProjects.find(item=>item.id===projectId)!;
  }


}*/