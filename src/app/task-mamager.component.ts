import{Component} from '@angular/core'
@Component({
    standalone:true,
    selector:'app-task-manager',
    templateUrl:'./task-manager.Component.html',
    styleUrls:['./task-manager.component.css']
})
export class TaskManagerComponent{
    tasks:string[]=[];
    newTask:string='';
    addTask(){
        if(this.newTask.trim()){
            this.tasks.push(this.newTask.trim());
            this.newTask='';
        }
    }
    removeTask(index: number){
        this.tasks.splice(index,1);
    }
}