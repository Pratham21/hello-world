import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { NewCourseForm1Component } from './new-course-form1/new-course-form1.component';
import { PasswordFormComponent } from './password-form/password-form.component';
import { PostsComponent } from './posts/posts.component';
import { HttpModule } from '@angular/http';
import { FooterComponent } from "./signup-form/footer.component";
import { NavbarComponent } from "./signup-form/navbar.component";
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from './signup-form/confirm.component';
import { InputFormatDirective } from "./input-format.directive";
import { ZippyComponent } from "./zippy/zippy.component";
import { AppComponent } from "./app.component";
import { LikeComponent } from "./like/like.component";
@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    SignupFormComponent,
    NewCourseForm1Component,
    PasswordFormComponent,
    PostsComponent,
    FooterComponent,
    ConfirmComponent,
    NavbarComponent
    
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BootstrapModalModule,
    ],
entryComponents: [
        ConfirmComponent
      ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
