import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  template: `
        <h5 class="text-muted" align ="center">Contact: support@miraclesoft.com</h5>
        <div class="ngContainer" align ="center" >
    <a class="logo-font" routerLink="/"></a>
    <span class="attribution">
      &copy; {{ today | date: 'yyyy' }}.
     Copyright<a href="http://www.miraclesoft.com/">Miracle</a>.
      
    </span>
  </div> 
  `,
  styleUrls: []
})
export class FooterComponent {
today: number = Date.now();
}
