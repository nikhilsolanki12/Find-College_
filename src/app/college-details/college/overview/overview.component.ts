import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor() { }

  @Input() about:any;

  ngOnInit(): void {
  }
  showMore(){
    var CollegeComponent = document.querySelector("app-college");
    var showMore = CollegeComponent?.querySelector(".hidden");
    var showLess = CollegeComponent?.querySelector(".more");
    showMore?.classList.add("show");
    showLess?.classList.add("hidden");
  }
}
