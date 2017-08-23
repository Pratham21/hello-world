import { Component, OnInit } from '@angular/core';
import { ConfirmComponent } from './confirm.component';
 import { DialogService } from "ng2-bootstrap-modal";
  import { Title } from '@angular/platform-browser';
  import { SignupComponent } from "./SignupModal.component";

@Component({
  selector: 'navbar',
  template: `

  <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
<nav class="navbar navbar-default navbar-inverse" role="navigation">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <h2 class="navbar-brand brand-name"><a href="#"> <img class="img-responsive" style="height:40px;" src ="assets/miracle-logo-light.png"></a></h2>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Our Projects <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">m</a></li>
            <li><a href="#">Something else here</a></li>
            <li class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
     
      <ul class="nav navbar-nav navbar-right">
        <li><p class="navbar-text">Already have an account?</p></li>
        <li class="menu">
          <a href="#login-dp" (click)=showConfirm()><b>Login</b></a>
			
      </li>
<ul class="nav navbar-nav navbar-right">
        <li class="menu">
          <a href="#sign-up" (click)=showConfirm1()><b>Sign Up</b></a>

        </li>
      </ul>
      </ul>
  </div>
  </div>
</nav>

  `,
  styleUrls: []
})
export class NavbarComponent implements OnInit {

  constructor(title: Title, private dialogService:DialogService) {
   }
  ngOnInit() {
  }

  showConfirm() {
            let disposable = this.dialogService.addDialog(ConfirmComponent, {
                title:'Login Details', 
                message:'login'})
                .subscribe((isConfirmed)=>{
                    //We get dialog result
                    if(isConfirmed) {
                        alert('accepted');
                    }
                    else {
                        alert('declined');
                    }
                });
 setTimeout(()=>{
                disposable.unsubscribe();
            },10000);
        };

 showConfirm1() {
            let disposable = this.dialogService.addDialog(SignupComponent, {
                title:'Sign Up Details', 
                message:'signup'})
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
  }