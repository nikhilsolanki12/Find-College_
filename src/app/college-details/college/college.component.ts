import { Component, OnInit } from '@angular/core';
import { CollegeService } from 'src/app/_services/college/college.service';
import { CoursesComponent } from './courses/courses.component';


@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {

  constructor(private college_details:CollegeService) { }

  collegeDetails:any = {};

  ngOnInit(): void {
    this.overviewVisible()
    this.getDetails()
  }

  getDetails(){
    let id = localStorage.getItem("id");
    this.college_details.subDetails(id).subscribe(
      data => {
        console.log(data);
        this.collegeDetails = data.data;
      }
    )
  }

  overviewVisible() {
    var CollegeComponent = document.querySelector("app-college");
    var overview = document.querySelector("app-overview");
    var menu = document.querySelectorAll(".menu");
    var active = CollegeComponent?.querySelector(".overview");
    this.hoverEffect();
    menu.forEach((element: { classList: { add: (arg0: string) => void; }; }) => {
      element.classList.add("invisible")
    });
    overview?.classList.remove("invisible");
    active?.classList.add("active")
    console.log("allow")
  }
  coursesVisible() {
    var CollegeComponent = document.querySelector("app-college");
    var courses = document.querySelector("app-courses");
    var menu = document.querySelectorAll(".menu");
    var active = CollegeComponent?.querySelector(".courses");
    this.hoverEffect();
    menu.forEach((element: { classList: { add: (arg0: string) => void; }; }) => {
      element.classList.add("invisible")
    });
    courses?.classList.remove("invisible");
    active?.classList.add("active")
    console.log("allow")
  }
  admissionVisible() {
    var CollegeComponent = document.querySelector("app-college");
    var admission = document.querySelector("app-admission");
    var menu = document.querySelectorAll(".menu");
    var active = CollegeComponent?.querySelector(".admission");
    this.hoverEffect();
    menu.forEach((element: { classList: { add: (arg0: string) => void; }; }) => {
      element.classList.add("invisible")
    });
    admission?.classList.remove("invisible");
    active?.classList.add("active")
    console.log("allow")
  }
  facilitesVisible() {
    var CollegeComponent = document.querySelector("app-college");
    var facilites = document.querySelector("app-facilites");
    var menu = document.querySelectorAll(".menu");
    var active = CollegeComponent?.querySelector(".facilites");
    this.hoverEffect();
    menu.forEach((element: { classList: { add: (arg0: string) => void; }; }) => {
      element.classList.add("invisible")
    });
    facilites?.classList.remove("invisible");
    active?.classList.add("active")
    console.log("allow")
  }
  campusVisible() {
    var CollegeComponent = document.querySelector("app-college");
    var campus = document.querySelector("app-campus");
    var menu = document.querySelectorAll(".menu");
    var active = CollegeComponent?.querySelector(".campus");
    this.hoverEffect();
    menu.forEach((element: { classList: { add: (arg0: string) => void; }; }) => {
      element.classList.add("invisible")
    });
    campus?.classList.remove("invisible");
    active?.classList.add("active")
    console.log("allow")
  }
  placementVisible() {
    var CollegeComponent = document.querySelector("app-college");
    var placement = document.querySelector("app-placement");
    var menu = document.querySelectorAll(".menu");
    var active = CollegeComponent?.querySelector(".placement");
    this.hoverEffect();
    menu.forEach((element: { classList: { add: (arg0: string) => void; }; }) => {
      element.classList.add("invisible")
    });
    placement?.classList.remove("invisible");
    active?.classList.add("active")
    console.log("allow")
  }
  hoverEffect() {
    var hoverElement = document.querySelectorAll(".hoverElement");
    hoverElement.forEach((element: { classList: { remove: (arg0: string) => void; }; }) => {
      element.classList.remove("active")
    });
  }
}