import { Component } from '@angular/core';
  import { ConfirmComponent } from './signup-form/confirm.component';
    import { DialogService } from "ng2-bootstrap-modal";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   constructor(private dialogService:DialogService) {}
        showConfirm() {
            let disposable = this.dialogService.addDialog(ConfirmComponent, {
                title:'Confirm title', 
                message:'Confirm message'})
                .subscribe((isConfirmed)=>{
                    //We get dialog result
                    if(isConfirmed) {
                        alert('accepted');
                    }
                    else {
                        alert('declined');
                    }
                });
            //We can close dialog calling disposable.unsubscribe();
            //If dialog was not closed manually close it by timeout
            setTimeout(()=>{
                disposable.unsubscribe();
            },10000);
        };

loginDp(){
  console.log("abc");
}
}
// courses; 
// loadCourses(){
// this.courses=[
// {id:1 , name:'course1'},
// {id:2 , name:'course2'},
// {id:3 , name:'course3'},
// ];

// }
// trackCourse(index,course){
//   return course ? course.id : undefined;
// }
// onAdd(){
//   this.courses.push({id:4,name:'course4'});
//   //this.courses.push({id:5,name:'course5'});
// }
// onRemove(course){
//   let index=this.courses.indexOf(course);
//   this.courses.splice(index,1);
// }
// onUpdate(course){
  
//   course.name='Updated';
// }

 
