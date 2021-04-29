import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe(res=>{
      this.Jumpto(res);
    })
  }

  Jumpto(section:string){
    setTimeout(()=>{
      document.getElementById(section)?.scrollIntoView({behavior:"smooth"});
    },10);
  }

}
