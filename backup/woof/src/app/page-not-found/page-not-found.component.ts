import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  <div class="mt-4">
    <h3 class="text-center text-white">404 Page not found...</h3>
  </div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
