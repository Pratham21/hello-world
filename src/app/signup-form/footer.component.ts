import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  template: `
        <h1 class="footer">Contact us: m2k17@miraclesoft.com</h1>
        <div class="container">
    <a class="logo-font" routerLink="/">conduit</a>
    <span class="attribution">
      &copy; {{ today | date: 'yyyy' }}.
      An interactive learning project from <a href="https://thinkster.io">Thinkster</a>.
      Code licensed under MIT.
    </span>
  </div> 
  `,
  styleUrls: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
