import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators, FormArray, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-new-course-form1',
  templateUrl: './new-course-form1.component.html',
  styleUrls: ['./new-course-form1.component.css']
})
export class NewCourseForm1Component  {
   form;
  //= new FormGroup({
  //     name: new FormControl('', Validators.required),
  //     contact: new FormGroup({
  //       email: new FormControl(),
  //       phone: new FormControl()

  //     }),
  //     topics: new FormArray([])
  //   });

// addTopic(topic: HTMLInputElement){
//   this.topics.push(new FormControl(topic.value));
//   topic.value='';

// }

// removeTopic(topic: FormControl) {
//   let index = this.topics.controls.indexOf(topic);
//   this.topics.removeAt(index);

// }
//  get topics() {
//    return this.form.get('topics') as FormArray;
//  }


constructor(fb: FormBuilder){
  this.form = fb.group({
      name: ['',Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
  });
}
}